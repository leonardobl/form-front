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

export const useStores = () => {
  const { setIsLoad } = useContextSite();
  const [agendamentosEmEspera, setAgendamentosEmEspera] = useState<
    IAgendamentoDTO[]
  >([] as IAgendamentoDTO[]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDaHoraDTO[]>(
    [] as IAgendamentoDaHoraDTO[]
  );

  function transformData(data: IAgendamentoDaHoraDTO[]) {
    const result = data.flatMap((item) => item.agendamentos);
    return result;
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

  function getData() {
    const hoje = reverseToIsoDate(new Date("2024-04-06").toLocaleDateString());

    setIsLoad(true);
    Agendamento.getByHour({
      data: hoje,
      status: [StatusAgendamentoEnum.AGENDADO, StatusAgendamentoEnum.INICIADO],
    })
      .then(({ data }) => {
        const emEspera = transformData(data);
        setAgendamentos(data);
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

  return { iniciarVistoria, agendamentos, agendamentosEmEspera };
};
