import React, { useCallback, useEffect, useState } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  IAgendamentoCadastroForm,
  IReagendamentoProps,
} from "../../../types/agendamento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";

type ModalProps = {
  isOpen: boolean;
  reagendamento?: IReagendamentoProps;
};

export const useStore = () => {
  const [searchParams] = useSearchParams();
  const reagendamento = !!(searchParams.get("reagendamento") === "true");
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [usuario] = useSessionStorage("cliente");
  const { uuidAgendamento } = useParams();
  const [modal, setModal] = useState<ModalProps>({ isOpen: false });

  function submitReagendamentoForm(data: IReagendamentoProps) {
    const PAYLOAD: IReagendamentoProps = {
      ...data,
      uuidAgendamento: uuidAgendamento,
    };

    setModal({ isOpen: true, reagendamento: PAYLOAD });
  }

  function handleReagendamento() {
    setIsLoad(true);

    setModal({ isOpen: false });

    Agendamento.reagendar(modal?.reagendamento)
      .then(({ data }) => {
        toast.success("Reagendamento efetuado com sucesso!");

        setTimeout(() => {
          navigate(`/meus-agendamentos/agendamento?id=${data?.uuid}`);
        }, 2000);
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

  function submitAgendamento(data: IAgendamentoCadastroForm) {
    setIsLoad(true);

    Agendamento.postV2(data)
      .then(({ data }) => {
        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: usuario?.uuidCliente,
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
    modal,
    setModal,
    submitReagendamentoForm,
    handleReagendamento,
  };
};
