import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { resetValues } from "../../../utils/resetObject";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

import { useSessionStorage } from "../../../hooks/useSessionStorage";

type FormFilterProps = {
  dataInicial?: string;
  dataFinal?: string;
  cidade?: string;
};

export const useDeliverys = () => {
  const [formFilter, setFormFilter] = useState<FormFilterProps>({});
  const [date, setDate] = useState(new Date());
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>([]);
  const { setIsLoad } = useContextSite();
  const [token] = useSessionStorage("@token");

  async function handleDownload({
    cidade,
    dia,
  }: {
    cidade?: string;
    dia: string;
  }) {
    if (!agendamentos?.length) return;

    let path = `https://agendamentos-api-staging.mapa.app.br:8443/agendamento/listar-deliveries?dia=${dia}`;

    if (cidade) {
      path = `https://agendamentos-api-staging.mapa.app.br:8443/agendamento/listar-deliveries?dia=${dia}&cidade=${cidade}`;
    }

    try {
      const response = await fetch(path, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "relatorio.xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error(error);
    }
  }

  function getAgendamentos(prop?: FormFilterProps) {
    setIsLoad(true);
    Agendamento.get({
      ...prop,
      tipoAtendimento: TipoAtendimentoEnum.DOMICILIO,
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

  function handleFilter(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: FormFilterProps = {
      ...formFilter,
      dataInicial: reverseToIsoDate(date?.toLocaleDateString()),
      dataFinal: reverseToIsoDate(date?.toLocaleDateString()),
    };
    const hasData = Object.values(PAYLOAD).some((item) => item);
    hasData && getAgendamentos(PAYLOAD);
  }

  function handleClean() {
    const reset = resetValues(formFilter);
    const date = reverseToIsoDate(new Date().toLocaleDateString());
    setDate(new Date());

    setFormFilter(reset);
    getAgendamentos({ dataInicial: date });
  }

  useEffect(() => {
    Delivery.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.uuid,
          label: item.cidade,
          element: item,
        }));

        setCidadesOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );

    getAgendamentos({
      dataInicial: reverseToIsoDate(date?.toLocaleDateString()),
      dataFinal: reverseToIsoDate(date?.toLocaleDateString()),
    });
  }, []);

  return {
    formFilter,
    setFormFilter,
    handleFilter,
    date,
    setDate,
    handleClean,
    cidadesOptions,
    handleDownload,
    agendamentos,
  };
};
