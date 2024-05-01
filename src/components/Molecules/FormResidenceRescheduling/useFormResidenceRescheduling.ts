import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { toast } from "react-toastify";
import { addDays } from "date-fns";
import { Delivery } from "../../../services/Delivery";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { IReagendamentoForm } from "../../../types/agendamento";
import { z } from "zod";

const schema = z.object({
  diaAgendado: z.string().min(1, "Você precisa selecionar um dia"),
  horaAgendada: z.string().min(1, "Você precisa selecionar um horario"),
  uuidDelivery: z.string().min(1, "Você precisa selecionar uma cidade"),
});

export const useFormResidenceRescheduling = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);

  const {
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IReagendamentoForm>({
    defaultValues: {
      uuidDelivery: "",
      diaAgendado: "",
      horaAgendada: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setDate(null);
    setValue("diaAgendado", "");

    if (watch("uuidDelivery")) {
      setIsLoading(true);
      Delivery.getDiasIndisponiveis({
        uuidDelivery: watch("uuidDelivery"),
      })
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
  }, [watch("uuidDelivery")]);

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

  useEffect(() => {
    setValue("horaAgendada", "");
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (watch("uuidDelivery")) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: watch("uuidDelivery"),
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
    cidadesOptions,
    isLoading,
    date,
    diasIndisponiveis,
    horariosOptions,
    setDate,
    Controller,
    control,
    handleSubmit,
    watch,
    errors,
  };
};
