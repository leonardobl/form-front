import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { toast } from "react-toastify";
import { addDays } from "date-fns";
import { Delivery } from "../../../services/Delivery";

export const useFormResidenceRescheduling = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);

  useEffect(() => {
    setDate(null);

    if (reagendamentoForm?.uuidDelivery) {
      setIsLoading(true);
      Delivery.getDiasIndisponiveis({
        uuidDelivery: reagendamentoForm.uuidDelivery,
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
  }, [reagendamentoForm?.uuidDelivery]);

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
    setReagendamentoForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (reagendamentoForm?.uuidDelivery) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: reagendamentoForm?.uuidDelivery,
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
  };
};
