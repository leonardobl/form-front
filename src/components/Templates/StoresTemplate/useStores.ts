import React, { useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IAgendamentoDTO,
  IAgendamentoDaHoraDTO,
} from "../../../types/agendamento";

import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

type ModalStartProps = {
  open: boolean;
  uuid?: string;
};

export const useStores = () => {
  const { setIsLoad } = useContextSite();
  const [agendamentosEmEspera, setAgendamentosEmEspera] = useState<
    IAgendamentoDTO[]
  >([] as IAgendamentoDTO[]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDaHoraDTO[]>(
    [] as IAgendamentoDaHoraDTO[]
  );
  const [modalStart, setModalStart] = useState<ModalStartProps>({
    open: false,
  });
  function transformData(data: IAgendamentoDaHoraDTO[]) {
    const result = data.flatMap((item) => item.agendamentos);
    return result.filter((item) => item.emEspera);
  }

  function iniciarVistoria(uuidAgendamento: string) {
    setIsLoad(true);
    Agendamento.iniciar({ uuid: uuidAgendamento })
      .then(({ data }) => {
        window.open(
          `/meus-agendamentos/agendamento?id=${uuidAgendamento}`,
          "_self"
        );
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

  function handleWait({ uuid }: { uuid: string }) {
    setIsLoad(true);
    Agendamento.colocarEmEspera({ uuidAgendamento: uuid })
      .then(({ data }) => {
        toast.success("Agendamento em espera!");
        getData();
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  function getData() {
    const hoje = reverseToIsoDate(new Date("2024-01-03").toLocaleDateString());

    setIsLoad(true);
    Agendamento.getByHour({
      data: hoje,
      status: [StatusAgendamentoEnum.AGENDADO, StatusAgendamentoEnum.INICIADO],
    })
      .then(({ data }) => {
        const emEspera = transformData(data);
        const foraDeEspera = data.filter((item) =>
          item.agendamentos.some((_) => !_.emEspera)
        );
        setAgendamentos(foraDeEspera);
        setAgendamentosEmEspera(emEspera);
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

  useEffect(() => {
    getData();
  }, []);

  return {
    iniciarVistoria,
    agendamentos,
    agendamentosEmEspera,
    handleWait,
    modalStart,
    setModalStart,
  };
};
