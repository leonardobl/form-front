import React, { useCallback, useEffect, useState } from "react";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useSearchParams } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { Pagamento } from "../../../services/Pagamento";

export const useInspectionTemplate = () => {
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  let [searchParams] = useSearchParams();
  const { setIsLoad } = useContextSite();
  const id = searchParams.get("id");

  const getAgendamento = useCallback(() => {
    setIsLoad(true);
    Agendamento.getById({ uuid: id })
      .then(({ data }) => {
        setAgendamento(data);
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
    if (id) {
      getAgendamento();
    }
  }, [id]);

  function handleDownload() {
    setIsLoad(true);
    Pagamento.downloadFatura({ uuidAgendamento: id })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  return { agendamento, handleDownload };
};
