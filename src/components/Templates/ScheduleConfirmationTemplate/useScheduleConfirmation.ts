import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { Loja } from "../../../services/Lojas";
import { addDays } from "date-fns";
import { useContextSite } from "../../../context/Context";
import { Delivery } from "../../../services/Delivery";
import { ISelectOptions } from "../../../types/inputs";

export const useScheduleConfirmation = () => {
  const params = useParams();
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const { setIsLoad } = useContextSite();
  const [date, setDate] = useState<Date>(null);
  const [horarios, setHorarios] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );

  function getDiasIndisponiveis(agendamento: IAgendamentoDTO) {
    setIsLoad(true);

    if (agendamento?.loja?.uuid) {
      Loja.getDiasIndisponiveis({ uuidLoja: agendamento?.loja?.uuid })
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
        .finally(() => setIsLoad(false));

      return;
    }

    Delivery.getDiasIndisponiveis({ uuidDelivery: agendamento?.delivery?.uuid })
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
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    if (params?.uuidAgendamento) {
      Agendamento.getById({ uuid: params?.uuidAgendamento })
        .then(({ data }) => {
          setAgendamento(data);
          getDiasIndisponiveis(data);
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
    }
  }, [params]);

  useEffect(() => {
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (agendamento?.loja?.uuid) {
        Loja.getHorariosDisponiveis({
          uuidLoja: agendamento?.loja?.uuid,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorarios(options);
        });

        return;
      }

      if (agendamento?.delivery?.uuid) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: agendamento?.delivery?.uuid,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorarios(options);
        });
      }
    }
  }, [date]);

  return { diasIndisponiveis, date, setDate, horarios };
};
