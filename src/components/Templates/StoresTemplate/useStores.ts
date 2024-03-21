import React, { useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

type DataProps = {
  horaAgendada: string;
  agendamento: IAgendamentoDTO[];
};

export const useStores = () => {
  const [data, setData] = useState<DataProps[]>([] as DataProps[]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>(
    [] as IAgendamentoDTO[]
  );

  function getData() {
    const hoje = reverseToIsoDate(new Date().toLocaleDateString());
    Agendamento.get({
      dataInicial: hoje,
      dataFinal: hoje,
      tipoAtendimento: TipoAtendimentoEnum.LOJA,
      size: 100,
    }).then(({ data }) => {
      setAgendamentos(data.content);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (agendamentos?.length > 0) {
      const horas = [
        ...new Set(agendamentos.map((item) => item.horaAgendada)),
      ].sort();

      let agendamentoFormatado = horas.map((item) => ({
        horaAgendada: item,
        agendamento: agendamentos.filter((_) => _.horaAgendada === item),
      }));

      setData(agendamentoFormatado);
    }
  }, [agendamentos]);

  return { data };
};
