import React, { useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IAgendamentoDTO,
  IAgendamentoDaHoraDTO,
  IIniciarAgendamentoProps,
} from "../../../types/agendamento";

import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Loja } from "../../../services/Lojas";
import { ISelectOptions } from "../../../types/inputs";
import { resetValues } from "../../../utils/resetObject";

type ModalStartProps = {
  open: boolean;
  uuidLoja?: string;
  uuidAgendamento?: string;
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

  const [formStart, setFormStart] = useState<IIniciarAgendamentoProps>(
    {} as IIniciarAgendamentoProps
  );
  const [vistoriadoresOptions, setVistoriadoresOptions] = useState<
    ISelectOptions[]
  >([]);
  const [baitasOptions, setBaiaOptions] = useState<ISelectOptions[]>([]);

  function transformData(data: IAgendamentoDaHoraDTO[]) {
    const result = data.flatMap((item) => item.agendamentos);
    return result.filter((item) => item.emEspera);
  }

  function iniciarVistoria(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);
    Agendamento.iniciar(formStart)
      .then(({ data }) => {
        toast.success("Agendamento iniciado");
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
        setModalStart({ open: false });
      });
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
    // const hoje = reverseToIsoDate(new Date().toLocaleDateString());

    setIsLoad(true);
    Agendamento.getByHour({
      data: hoje,
      status: [
        StatusAgendamentoEnum.AGENDADO,
        StatusAgendamentoEnum.INICIADO,
        StatusAgendamentoEnum.FINALIZADO,
      ],
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

  useEffect(() => {
    if (modalStart?.open) {
      setFormStart((prev) => ({ ...prev, uuid: modalStart?.uuidAgendamento }));

      Loja.getAtendentesLivres({ uuid: modalStart?.uuidLoja }).then(
        ({ data }) => {
          const options = data.map((item) => ({
            value: item.uuid,
            label: item.nome,
            element: item,
          }));

          setVistoriadoresOptions(options);
        }
      );

      Loja.getBaiasLivres({ uuid: modalStart?.uuidLoja }).then(({ data }) => {
        const options = data.map((item) => ({
          value: item.uuid,
          label: item.nome,
        }));
        setBaiaOptions(options);
      });

      return;
    }

    const reset = resetValues(formStart);
    setFormStart(reset);
  }, [modalStart?.open]);

  return {
    iniciarVistoria,
    agendamentos,
    agendamentosEmEspera,
    handleWait,
    modalStart,
    setModalStart,
    formStart,
    setFormStart,
    vistoriadoresOptions,
    baitasOptions,
  };
};
