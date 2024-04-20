import React, { useEffect, useState } from "react";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

export const useConfirmAppointment = () => {
  const params = useParams();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const { setIsLoad } = useContextSite();

  useEffect(() => {
    if (params?.uuidAgendamento) {
      setIsLoad(true);
      Agendamento.getById({ uuid: params?.uuidAgendamento })
        .then(({ data }) => setAgendamento(data))
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoad(false));
    }
  }, [params]);

  return { agendamento };
};
