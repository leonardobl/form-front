import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loja } from "../../../services/Lojas";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoBasicoForm } from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { addDays } from "date-fns";
import { Delivery } from "../../../services/Delivery";

export const useResidence = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState<IAgendamentoBasicoForm>(
    {} as IAgendamentoBasicoForm
  );

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (agendamentoContext?.reAgendamento) {
      setModalIsOpen(true);
      return;
    }
    setIsLoad(true);

    const PAYLOAD: IAgendamentoBasicoForm = {
      ...form,
      tipoAtendimento: TipoAtendimentoEnum.DOMICILIO,
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
    };

    Agendamento.post(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoContext({
          ...agendamentoContext,
          uuidAgendamento: data.uuid,
          cidade: data?.delivery?.cidade,
        });

        if (token) {
          return window.open("/servicos", "_self");
        }

        window.open("/login-cadastro", "_self");
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
    setDate(null);

    if (form?.uuidDelivery) {
      setIsLoading(true);
      Delivery.getDiasIndisponiveis({ uuidDelivery: form.uuidDelivery })
        .then(({ data }) => {
          const options = data.map((item) => addDays(new Date(item), 1));
          setDiasIndisponiveis(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoading(false));
    }
  }, [form?.uuidDelivery]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (form?.uuidDelivery) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: form?.uuidDelivery,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }
    }
  }, [date]);

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
  }, []);

  return {
    cidadesOptions,
    form,
    setForm,
    handleSubmit,
    date,
    setDate,
    isLoading,
    diasIndisponiveis,
    modalIsOpen,
    horariosOptions,
  };
};