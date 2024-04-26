import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loja } from "../../../services/Lojas";
import { ISelectOptions } from "../../../types/inputs";
import {
  IAgendamentoBasicoForm,
  IReagendamentoProps,
} from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { addDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

export const useStore = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState<IAgendamentoCadastroForm>(
    {} as IAgendamentoCadastroForm
  );
  const [reagendamentoForm, setReagendamentoForm] =
    useState<IReagendamentoProps>({} as IReagendamentoProps);
  const [sessionAgendamento, setSessionagendamento] =
    useSessionStorage("agendamentoSession");

  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      uuidLoja: "",
    },
  });

  function submit(data: any) {
    console.log(data);

    return;
    if (agendamentoSession?.reagendamento) {
      setModalIsOpen(true);
      return;
    }

    setIsLoad(true);

    Agendamento.postV2(form)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidAgendamento: data.uuid,
        });

        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: agendamentoSession?.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          });
        }

        navigate(`/agendamento/${data.uuid}/login-cadastro`);
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

  function handleReagendamento() {
    setIsLoad(true);
    setModalIsOpen(false);

    const PAYLOAD: IReagendamentoProps = {
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
      horaAgendada: reagendamentoForm.horaAgendada,
      uuidAgendamento: agendamentoSession?.uuidAgendamento,
      uuidLoja: reagendamentoForm.uuidLoja,
      uuidDelivery: reagendamentoForm.uuidDelivery,
    };

    Agendamento.reagendar(PAYLOAD)
      .then(() => {
        toast.success("Reagendamento efetuado com sucesso!");
        setAgendamentoSession({ ...agendamentoSession, reagendamento: false });
        setTimeout(() => {
          navigate(
            `/meus-agendamentos/agendamento?id=${agendamentoSession?.uuidAgendamento}`
          );
        }, 2000);
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

  useEffect(() => {
    setReagendamentoForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (reagendamentoForm?.uuidLoja) {
        Loja.getHorariosDisponiveis({
          uuidLoja: reagendamentoForm?.uuidLoja,
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
    setDate(null);
    if (reagendamentoForm?.uuidLoja) {
      setIsLoading(true);
      Loja.getDiasIndisponiveis({ uuidLoja: reagendamentoForm.uuidLoja })
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
  }, [reagendamentoForm?.uuidLoja]);

  return {
    lojasOptions,
    form,
    setForm,
    reagendamentoForm,
    setReagendamentoForm,
    date,
    setDate,
    modalIsOpen,
    diasIndisponiveis,
    isLoading,
    horariosOptions,
    handleSubmit,
    submit,
    register,
    handleReagendamento,
    setModalIsOpen,
    sessionAgendamento,
    Controller,
    control,
  };
};
