import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { IFaturaDTO } from "../../../types/pagamento";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";

export const usePix = () => {
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);

  // function acessarFatura() {
  //   window.open(
  //     `${agendamento?.fatura?.url ? agendamento?.fatura?.url : pagamento?.url}`,
  //     "_blank"
  //   );
  // }

  useEffect(() => {
    if (!agendamentoContext?.uuidAgendamento) return;

    setIsLoad(true);

    Pagamento.consultarFatura({
      uuidAgendamento: agendamentoContext?.uuidAgendamento,
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
  }, [agendamentoContext?.uuidAgendamento]);

  return { pagamento };
};
