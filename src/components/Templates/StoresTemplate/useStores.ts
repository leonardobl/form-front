import React, { useEffect, useState } from "react";
import { Agendamento } from "../../../services/Agendamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IAgendamentoDTO,
  IAgendamentoDaHoraDTO,
  IAgendamentoIniciarForm,
} from "../../../types/agendamento";

import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Loja } from "../../../services/Lojas";
import { ISelectOptions } from "../../../types/inputs";
import { resetValues } from "../../../utils/resetObject";

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

  const [formStart, setFormStart] = useState<IAgendamentoIniciarForm>(
    {} as IAgendamentoIniciarForm
  );
  const [vistoriadoresOptions, setVistoriadoresOptions] = useState<
    ISelectOptions[]
  >([]);
  const [baitasOptions, setBaiaOptions] = useState<ISelectOptions[]>([]);

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
      Loja.getAtendentes({ uuid: "1a49725e-f5e2-4682-ae6a-fe13ec2aa7df" }).then(
        ({ data }) => {
          const options = data.map((item) => ({
            value: item.uuidUsuario,
            label: item.nome,
            element: item,
          }));

          setVistoriadoresOptions(options);
        }
      );

      Loja.getBaias({ uuid: "1a49725e-f5e2-4682-ae6a-fe13ec2aa7df" }).then(
        ({ data }) => {
          const options = data.map((item) => ({
            value: item.uuid,
            label: item.nome,
          }));
          setBaiaOptions(options);
        }
      );

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
