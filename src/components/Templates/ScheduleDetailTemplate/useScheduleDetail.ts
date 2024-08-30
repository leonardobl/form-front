import React, { SyntheticEvent, useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { useSearchParams } from "react-router-dom";
import {
  IAgendamentoDTO,
  IReembolsoConfirmarForm,
} from "../../../types/agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import dayjs from "dayjs";

export interface IModalReembolsoProps {
  isOPen: boolean;
  date?: Date;
}

export const useScheduleDetail = () => {
  const { setIsLoad } = useContextSite();
  const [searchParams, setSearchParams] = useSearchParams();
  let uuidAgendamento = searchParams.get("id");
  const [modalReembolso, setModalReembolso] = useState<IModalReembolsoProps>({
    isOPen: false,
  });
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

  function confirmarReembolso(e: SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);
    const PAYLOAD: IReembolsoConfirmarForm = {
      uuid: uuidAgendamento,
      dataDevolucao: dayjs(modalReembolso?.date).toISOString(),
    };

    Agendamento.confirmarReembolso(PAYLOAD)
      .then(({ data }) => {
        setAgendamento(data);
        toast.success("Reembolso confirmado");
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
        setModalReembolso({ isOPen: false, date: null });
      });
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
    window.open(`${agendamento?.fatura?.url}.pdf`, "_blank");
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
    confirmarReembolso,
    modalReembolso,
    setModalReembolso,
  };
};
