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
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [filterOpen, setFilterOpen] = useState(isMobile ? false : true);

  async function handleDownload({
    cidade,
    dia,
  }: {
    cidade?: string;
    dia: string;
  }) {
    if (!agendamentos?.length) return;

    Agendamento.downloadExc({ dia, cidade })
      .then()
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }

  function getAgendamentos(prop?: FormFilterProps) {
    setIsLoad(true);
    Agendamento.get({
      ...prop,
      dataInicial: prop?.dataInicial,
      dataFinal: prop?.dataInicial,
      tipoAtendimento: TipoAtendimentoEnum.DOMICILIO,
      statusAgendamento: StatusAgendamentoEnum.AGENDADO,
      size: 100,
      sort: "horaAgendada,ASC",
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
    isMobile && setFilterOpen(false);
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
    isMobile,
    filterOpen,
    setFilterOpen,
  };
};
