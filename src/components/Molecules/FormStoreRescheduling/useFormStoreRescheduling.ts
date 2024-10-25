import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { IReagendamentoProps } from "../../../types/agendamento";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";
import { addDays } from "date-fns";
import { Agendamento } from "../../../services/Agendamento";
import { useContextSite } from "../../../context/Context";
import { useParams } from "react-router-dom";

export const useFormStoreRescheduling = () => {
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date>(null);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoad } = useContextSite();
  const { uuidAgendamento } = useParams();
  const schemaReAgendamento = z.object({
    diaAgendado: z.string().min(1, "Você precisa selecionar um dia"),
    horaAgendada: z.string().min(1, "Você precisa selecionar um horario"),
    uuidLoja: z.string().min(1, "Você precisa selecionar uma cidade"),
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IReagendamentoProps>({
    defaultValues: {
      diaAgendado: "",
      uuidLoja: "",
      horaAgendada: "",
    },
    resolver: zodResolver(schemaReAgendamento),
    reValidateMode: "onChange",
  });

  const getLojas = useCallback(() => {
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
    getLojas();
    if (uuidAgendamento) {
      getAgendamento();
    }
  }, [uuidAgendamento]);

  const getAgendamento = useCallback(() => {
    setIsLoad(true);
    Agendamento.getById({ uuid: uuidAgendamento })
      .then(({ data }) => {
        setValue("uuidLoja", data.loja.uuid);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, []);

  useEffect(() => {
    setDate(null);
    setValue("diaAgendado", "");
    if (watch("uuidLoja")) {
      setIsLoading(true);
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
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [watch("uuidLoja")]);

  useEffect(() => {
    setValue("horaAgendada", "");

    if (date) {
      if (watch("uuidLoja")) {
        Loja.getHorariosDisponiveis({
          uuidLoja: watch("uuidLoja"),
          dataAgendamento: watch("diaAgendado"),
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
    watch,
    horariosOptions,
    setDate,
    diasIndisponiveis,
    isLoading,
  };
};
