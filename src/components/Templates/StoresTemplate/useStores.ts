import React, { useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";

type DataProps = {
  horaAgendada: string;
  agendamento: IAgendamentoDTO[];
};

export const useStores = () => {
  const { setIsLoad } = useContextSite();
  const [data, setData] = useState<DataProps[]>([] as DataProps[]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>(
    [] as IAgendamentoDTO[]
  );

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
    const hoje = reverseToIsoDate(new Date().toLocaleDateString());

    setIsLoad(true);
    Agendamento.get({
      dataInicial: hoje,
      dataFinal: hoje,
      tipoAtendimento: TipoAtendimentoEnum.LOJA,
      size: 100,
    })
      .then(({ data }) => {
        setAgendamentos(data.content);
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

  useEffect(() => {
    if (agendamentos?.length > 0) {
      const horas = [
        ...new Set(agendamentos?.map((item) => item?.horaAgendada)),
      ].sort();

      let agendamentoFormatado = horas.map((item) => ({
        horaAgendada: item,
        agendamento: agendamentos.filter((_) => _.horaAgendada === item),
      }));

      setData(agendamentoFormatado);
    }
  }, [agendamentos]);

  return { data, iniciarVistoria };
};
