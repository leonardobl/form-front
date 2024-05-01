import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  IAgendamentoCadastroForm,
  IReagendamentoForm,
  IReagendamentoProps,
} from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

type IModalProps = {
  isOpen: boolean;
  dataForm?: IReagendamentoForm;
};

export const useResidence = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const [modal, setModal] = useState<IModalProps>({ isOpen: false });
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const { uuidAgendamento } = useParams();
  const [searchParams] = useSearchParams();
  const reagendamento = !!(searchParams.get("reagendamento") === "true");
  function onSubmitReagendamentoForm(data: IReagendamentoForm) {
    setModal({ isOpen: true, dataForm: data });
  }

  function handleReagendamento() {
    setIsLoad(true);

    const PAYLOAD: IReagendamentoProps = {
      // diaAgendado: data.diaAgendado.toLocaleDateString().split("/").reverse().join("-"),
      diaAgendado: modal.dataForm.diaAgendado,
      horaAgendada: modal.dataForm.horaAgendada,
      uuidAgendamento,
      uuidDelivery: modal.dataForm.uuidDelivery,
    };

    console.log(PAYLOAD);

    return;

    Agendamento.reagendar(PAYLOAD)
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
      .finally(() => {
        setIsLoad(false);
        setModal({ isOpen: false });
      });
  }

  function handleSubmitAgendamentoForm(data: IAgendamentoCadastroForm) {
    console.log(data);

    return;

    setIsLoad(true);

    Agendamento.postV2(data)
      .then(({ data }) => {
        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: agendamentoSession?.uuidCliente,
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
    handleSubmitAgendamentoForm,
    setModal,
    modal,
    handleReagendamento,
    onSubmitReagendamentoForm,
    reagendamento,
  };
};
