import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import {
  IAgendamentoDaHoraDTO,
  IAgendamentoIniciarForm,
  IIniciarAgendamentoProps,
} from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useMediaQuery } from "react-responsive";
import { IColaboradorCompletoDTO } from "../../../types/colaborador";
import { Colaborador } from "../../../services/Colaborador";

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
  const [token] = useSessionStorage("@token");
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [filterOpen, setFilterOpen] = useState(isMobile ? false : true);

  const [colaboradorAtual, setColaboradorAtual] =
    useState<IColaboradorCompletoDTO>({} as IColaboradorCompletoDTO);

  const getColaboradorAtual = useCallback(() => {
    Colaborador.atual()
      .then(({ data }) => {
        setColaboradorAtual(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      );
  }, []);

  useEffect(() => {
    getColaboradorAtual();
  }, [getColaboradorAtual]);

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

  function atribuirAgendamento(data: IIniciarAgendamentoProps) {
    console.log(data);

    // const PAYLOAD: IIniciarAgendamentoProps = {
    //   uuid: modalAtribuir?.agendamento?.uuid,
    //   uuidVistoriador: modalAtribuir?.formStar?.uuidVistoriador,
    //   uuidAtendente: colaboradorAtual?.uuid,
    // };

    // setIsLoad(true);

    // Agendamento.atribuir(PAYLOAD)
    //   .then(() => {
    //     toast.success("Agendamento atribuido com sucesso!");
    //   })
    //   .catch(
    //     ({
    //       response: {
    //         data: { mensagem },
    //       },
    //     }) => {
    //       toast.error(mensagem);
    //     }
    //   )
    //   .finally(() => {
    //     setIsLoad(false);
    //     setModalAtribuir({ open: false });
    //   });
  }

  function iniciarVistoria(data: IIniciarAgendamentoProps) {
    const PAYLOAD: IIniciarAgendamentoProps = {
      ...data,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);
    Agendamento.iniciar(PAYLOAD)
      .then(({ data }) => {
        toast.success("Agendamento iniciado");
        getAgendamentos();
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
    iniciarVistoria,
    atribuirAgendamento,
  };
};
