import React, { useEffect, useState } from "react";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useNavigate, useParams } from "react-router-dom";

export const usePayment = () => {
  const params = useParams();
  const [payment, setPayment] = useState<FormaPagamentoEnum>();
  const [btnFaturaGerada, setBtnFaturaGerada] = useState(false);

  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setBtnFaturaGerada(true);

    Pagamento.gerarFatura({
      uuidAgendamento: params?.uuidAgendamento,
      formaPagamento: payment,
    })
      .then(() =>
        navigate(
          `/agendamento/${
            params.uuidAgendamento
          }/pagamento/${payment.toLowerCase()}`
        )
      )
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
          setBtnFaturaGerada(false);
        }
      );
  }

  useEffect(() => {
    if (!params?.uuidAgendamento) return;
    setIsLoad(true);

    Agendamento.getById({ uuid: params?.uuidAgendamento })
      .then(({ data }) => {
        if (data?.fatura?.pix) {
          navigate(`/agendamento/${data.uuid}/pagamento/pix`);
          return;
        }

        if (data?.fatura?.boleto) {
          navigate(`/agendamento/${data.uuid}/pagamento/boleto`);
          return;
        }
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, [params?.uuidAgendamento]);

  return {
    setPayment,
    handleSubmit,
    payment,
    btnFaturaGerada,
    setBtnFaturaGerada,
  };
};
