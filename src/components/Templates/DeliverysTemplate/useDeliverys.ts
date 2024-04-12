import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { IAgendamentoDaHoraDTO } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

type FormFilterProps = {
  data?: string;
  cidade?: string;
};

export const useDeliverys = () => {
  const [formFilter, setFormFilter] = useState<FormFilterProps>({});
  const [date, setDate] = useState(new Date());
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDaHoraDTO[]>([]);
  const { setIsLoad } = useContextSite();

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

  function getAgendamentos(props?: FormFilterProps) {
    setIsLoad(true);

    Agendamento.getByHour({
      data: props?.data,
      uuidDelivery: props?.cidade,
      status: [
        StatusAgendamentoEnum.AGENDADO,
        StatusAgendamentoEnum.INICIADO,
        StatusAgendamentoEnum.FINALIZADO,
      ],
    })
      .then(({ data }) => {
        setAgendamentos(data.agendamentos);
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
      data: reverseToIsoDate(date?.toLocaleDateString()),
    };

    getAgendamentos(PAYLOAD);
  }

  function handleClean() {
    const data = reverseToIsoDate(new Date().toLocaleDateString());
    const cidade = cidadesOptions[0]?.value;
    setDate(new Date());

    setFormFilter({ data, cidade });
    getAgendamentos({ data, cidade });
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
        const date = reverseToIsoDate(new Date()?.toLocaleDateString());
        const cidade = options[0]?.value;

        setFormFilter({
          data: date,
          cidade,
        });

        getAgendamentos({ cidade, data: date });
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
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
