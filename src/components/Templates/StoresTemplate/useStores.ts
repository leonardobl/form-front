import React, { useCallback, useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IAgendamentoDTO,
  IAgendamentoDaHoraDTO,
} from "../../../types/agendamento";

import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Colaborador } from "../../../services/Colaborador";
import { IColaboradorCompletoDTO } from "../../../types/colaborador";
import { removeEmpty } from "../../../utils/removeEmpty";

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
  const [colaborador, setColaborador] = useState<IColaboradorCompletoDTO>(
    {} as IColaboradorCompletoDTO
  );
  function transformData(data: IAgendamentoDaHoraDTO[]) {
    const result = data.flatMap((item) => item.agendamentos);
    return result.filter((item) => item.emEspera);
  }

  const getColaborador = useCallback(async () => {
    Colaborador.atual().then(({ data }) => {
      setColaborador(data);
    });
  }, []);

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

  const getData = () => {
    setIsLoad(true);
    const hoje = reverseToIsoDate(new Date().toLocaleDateString());
    const uuids = {
      uuidDelivery: colaborador?.delivery?.uuid,
      uuidLoja: colaborador?.loja?.uuid,
    };

    const filterEmpty = removeEmpty(uuids);

    Agendamento.getByHour({
      data: hoje,
      status: [StatusAgendamentoEnum.AGENDADO, StatusAgendamentoEnum.INICIADO],
      ...filterEmpty,
    })
      .then(({ data }) => {
        const emEspera = transformData(data?.agendamentos);
        const foraDeEspera = data.agendamentos.filter((item) =>
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
  };

  useEffect(() => {
    getColaborador().catch(
      ({
        response: {
          data: { mensagem },
        },
      }) => toast.error(mensagem)
    );
  }, [getColaborador]);

  useEffect(() => {
    if (colaborador?.uuid) {
      getData();
    }
  }, [colaborador]);

  return {
    iniciarVistoria,
    agendamentos,
    agendamentosEmEspera,
    handleWait,
    modalStart,
    setModalStart,
  };
};
