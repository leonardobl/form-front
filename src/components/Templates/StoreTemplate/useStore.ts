import React from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";

export const useStore = () => {
  const [searchParams] = useSearchParams();
  const reagendamento = !!(searchParams.get("reagendamento") === "true");
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [clienteSession] = useSessionStorage("cliente");

  function submitAgendamento(data: IAgendamentoCadastroForm) {
    setIsLoad(true);

    Agendamento.postV2(data)
      .then(({ data }) => {
        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: clienteSession?.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          });
        }

        navigate(`/agendamento/${data.uuid}/login-cadastro`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  return {
    reagendamento,
    submitAgendamento,
  };
};
