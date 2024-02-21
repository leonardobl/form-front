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

export const useStore = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState<IAgendamentoBasicoForm>(
    {} as IAgendamentoBasicoForm
  );

  useEffect(() => {
    setDate(null);
    if (form?.uuidLoja) {
      setIsLoading(true);
      Loja.getDiasIndisponiveis({ uuidLoja: form.uuidLoja })
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
  }, [form?.uuidLoja]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (form?.uuidLoja) {
        Loja.getHorariosDisponiveis({
          uuidLoja: form?.uuidLoja,
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

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (agendamentoContext?.reAgendamento) {
      setModalIsOpen(true);
      return;
    }
    setIsLoad(true);

    const PAYLOAD: IAgendamentoBasicoForm = {
      ...form,
      tipoAtendimento: TipoAtendimentoEnum.LOJA,
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
    };

    Agendamento.post(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoContext({
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
    Loja.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          label: item.nome,
          value: item.uuid,
          element: item,
        }));

        setLojasOptions(options);
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
    lojasOptions,
    form,
    setForm,
    date,
    setDate,
    modalIsOpen,
    diasIndisponiveis,
    isLoading,
    horariosOptions,
    handleSubmit,
  };
};
