import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { useSearchParams } from "react-router-dom";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

export const useScheduleDetail = () => {
  const { setIsLoad } = useContextSite();
  const [searchParams, setSearchParams] = useSearchParams();
  let uuidAgendamento = searchParams.get("id");
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );

  function cancelarAgendamento() {
    setIsLoad(true);
    Agendamento.cancelar({ uuid: uuidAgendamento })
      .then(({ data }) => setAgendamento(data))
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    if (uuidAgendamento) {
      setIsLoad(true);
      Agendamento.getById({ uuid: uuidAgendamento })
        .then(({ data }) => setAgendamento(data))
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoad(false));
    }
  }, [uuidAgendamento]);

  const menuDisabled = [
    StatusAgendamentoEnum.CANCELADO,
    StatusAgendamentoEnum.INICIADO,
    StatusAgendamentoEnum.FINALIZADO,
  ].includes(agendamento?.status);

  function acessarFatura() {
    window.open(`${agendamento?.fatura?.url}`, "_blank");
  }

  function confirmarPagamento() {
    setIsLoad(true);
    Agendamento.confirmarPagamento({ uuid: uuidAgendamento })
      .then(({ data }) => setAgendamento(data))
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  function retornarStatusIniciado() {
    setIsLoad(true);
    Agendamento.retornarStatusIniciado({ uuid: uuidAgendamento })
      .then(({ data }) => setAgendamento(data))
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
    confirmarPagamento,
    retornarStatusIniciado,
    acessarFatura,
    agendamento,
    setAgendamento,
    menuDisabled,
    cancelarAgendamento,
  };
};
