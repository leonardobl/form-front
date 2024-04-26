import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { IReagendamentoProps } from "../../../types/agendamento";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";
import { addDays } from "date-fns";
import { Agendamento } from "../../../services/Agendamento";
import { useNavigate, useParams } from "react-router-dom";
import { useContextSite } from "../../../context/Context";

export const useFormStoreRescheduling = () => {
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date>(null);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { setIsLoad } = useContextSite();

  const schemaReAgendamento = z.object({
    uuidAgendamento: z.string(),
    bairro: z.string(),
    cep: z.string(),
    cidade: z.string(),
    complemento: z.string(),
    diaAgendado: z.string(),
    horaAgendada: z.string(),
    logradouro: z.string(),
    nome: z.string(),
    numero: z.string(),
    telefone: z.string(),
    uf: z.string(),
    uuidDelivery: z.string(),
    uuidLoja: z.string(),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IReagendamentoProps>({
    defaultValues: {},
    resolver: zodResolver(schemaReAgendamento),
    reValidateMode: "onSubmit",
  });

  function submitReagendamento(data: IReagendamentoProps) {
    setIsLoad(true);

    const PAYLOAD: IReagendamentoProps = {
      diaAgendado: data.diaAgendado,
      horaAgendada: data.horaAgendada,
      uuidAgendamento: params?.uuidAgendamento,
      uuidLoja: data.uuidLoja,
      uuidDelivery: data.uuidDelivery,
    };

    Agendamento.reagendar(PAYLOAD)
      .then(({ data }) => {
        toast.success("Reagendamento efetuado com sucesso!");

        setTimeout(() => {
          navigate(`/meus-agendamentos/agendamento?id=${data?.uuid}`);
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
    setDate(null);
    if (watch("uuidLoja")) {
      Loja.getDiasIndisponiveis({ uuidLoja: watch("uuidLoja") })
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
        );
    }
  }, [watch("uuidLoja")]);

  useEffect(() => {
    setValue("horaAgendada", null);

    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (watch("uuidLoja")) {
        Loja.getHorariosDisponiveis({
          uuidLoja: watch("uuidLoja"),
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

  return {
    lojasOptions,
    errors,
    control,
    Controller,
    handleSubmit,
    date,
    horariosOptions,
    setDate,
    modalIsOpen,
    setModalIsOpen,
    diasIndisponiveis,
    isSubmitting,
    register,
    submitReagendamento,
  };
};
