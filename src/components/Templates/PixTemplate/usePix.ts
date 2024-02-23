import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { IFaturaDTO } from "../../../types/pagamento";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const usePix = () => {
  const { setIsLoad } = useContextSite();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);

  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  // function acessarFatura() {
  //   window.open(
  //     `${agendamento?.fatura?.url ? agendamento?.fatura?.url : pagamento?.url}`,
  //     "_blank"
  //   );
  // }

  useEffect(() => {
    if (!agendamentoSession?.uuidAgendamento) return;

    setIsLoad(true);

    Pagamento.consultarFatura({
      uuidAgendamento: agendamentoSession?.uuidAgendamento,
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
  }, [agendamentoSession?.uuidAgendamento]);

  return { pagamento };
};
