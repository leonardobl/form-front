import React, { useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { IFaturaDTO } from "../../../types/pagamento";
import { useContextSite } from "../../../context/Context";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const useTicket = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const params = useParams();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);

  const { isLoad, setIsLoad } = useContextSite();

  function acessarFatura() {
    window.open(
      `${agendamento?.fatura?.url ? agendamento?.fatura?.url : pagamento?.url}`,
      "_blank"
    );
  }

  useEffect(() => {
    if (!params?.uuidAgendamento) return;

    setIsLoad(true);

    Pagamento.consultarFatura({ uuidAgendamento: params?.uuidAgendamento })
      .then(({ data }) => {
        setPagamento(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, [params]);

  return { pagamento };
};
