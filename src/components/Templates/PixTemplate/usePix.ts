import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { IFaturaDTO } from "../../../types/pagamento";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useParams } from "react-router-dom";

export const usePix = () => {
  const { setIsLoad } = useContextSite();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);
  const params = useParams();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  // function acessarFatura() {
  //   window.open(
  //     `${agendamento?.fatura?.url ? agendamento?.fatura?.url : pagamento?.url}`,
  //     "_blank"
  //   );
  // }

  useEffect(() => {
    if (!params?.uuidAgendamento) return;

    setIsLoad(true);

    Pagamento.consultarFatura({
      uuidAgendamento: params?.uuidAgendamento,
    })
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