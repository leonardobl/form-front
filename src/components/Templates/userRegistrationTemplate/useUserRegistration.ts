import React from "react";
import { toast } from "react-toastify";

import { removerCaracteresEspeciais } from "../../../utils/masks";
import { Cliente } from "../../../services/Cliente";
import { TipoClienteEnum } from "../../../enums/tipoCliente";
import { IClienteForm } from "../../../types/cliente";
import { useContextSite } from "../../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useUserRegistration = () => {
  const { setIsLoad } = useContextSite();
  const params = useParams();
  const [agendamentoSession] = useSessionStorage("agendamentoSession");

  const navigate = useNavigate();

  function handleSubmit(data: IClienteForm) {
    const PAYLOAD: IClienteForm = {
      ...data,
      cpfCnpj: removerCaracteresEspeciais(data.cpfCnpj),
      tipo: TipoClienteEnum.PARTICULAR,
    };

    console.log(PAYLOAD);
    return;

    setIsLoad(true);

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");

        if (params?.uuidAgendamento) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: params?.uuidAgendamento,
            uuidCliente: agendamentoSession?.uuidCliente,
          }).then(({ data }) => {
            setTimeout(() => {
              navigate(`/agendamento/${params?.uuidAgendamento}/login`);
            }, 2000);
          });
        }

        setTimeout(() => {
          navigate("/agendamento/login");
        }, 2000);
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoad(false);
      });
  }

  return {
    handleSubmit,
  };
};
