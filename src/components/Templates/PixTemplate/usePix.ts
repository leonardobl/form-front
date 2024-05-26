import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { IFaturaDTO } from "../../../types/pagamento";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate, useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

export const usePix = () => {
  const { setIsLoad } = useContextSite();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);
  const params = useParams();
  const navigate = useNavigate();

  // function acessarFatura() {
  //   window.open(
  //     `${agendamento?.fatura?.url ? agendamento?.fatura?.url : pagamento?.url}`,
  //     "_blank"
  //   );
  // }

  useEffect(() => {
    if (!params?.uuidAgendamento) {
      toast.error("agendamento não encontrado!");
      return;
    }

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

  useEffect(() => {
    if (!params?.uuidAgendamento) {
      toast.error("agendamento não encontrado!");
      return;
    }

    const timeInterval = setInterval(() => {
      Agendamento.getById({ uuid: params?.uuidAgendamento })
        .then(({ data }) => {
          if (data?.status === StatusAgendamentoEnum.PAGO) {
            navigate(
              `/agendamento/${data?.uuid}/pagamento/pix/confirmacao-pagamento`
            );
          }
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
    }, 3000);

    return () => clearInterval(timeInterval);
  }, [params]);

  return { pagamento };
};
