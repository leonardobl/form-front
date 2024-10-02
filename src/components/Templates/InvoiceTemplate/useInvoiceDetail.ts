import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { useParams, useSearchParams } from "react-router-dom";
import { IAgendamentoDTO } from "../../../types/agendamento";

export const useInvoiceDetail = () => {
  const params = useParams();
  const { setIsLoad } = useContextSite();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );

  useEffect(() => {
    if (params?.uuidAgendamento) {
      Agendamento.getById({ uuid: params?.uuidAgendamento })
        .then(({ data }) => {
          setAgendamento(data);
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
  }, [params?.uuidAgendamento]);

  return {
    agendamento,
    setAgendamento,
  };
};
