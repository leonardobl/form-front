import React, { useEffect, useState } from "react";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
  const [payment, setPayment] = useState<FormaPagamentoEnum>();
  // const [pagamento, setPagamento] = useState<IAgendamentoDTO>(
  //   {} as IAgendamentoDTO
  // );
  // const { agendamentoContext, setIsLoad } = useContextSite();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    navigate(`/pagamento/${payment.toLowerCase()}`);
  }

  // useEffect(() => {
  //   if (!agendamentoContext?.uuidAgendamento) return;
  //   setIsLoad(true);

  //   Agendamento.getById({ uuid: agendamentoContext?.uuidAgendamento })
  //     .then(({ data }) => {
  //       setPagamento(data);
  //     })
  //     .catch(
  //       ({
  //         response: {
  //           data: { mensagem },
  //         },
  //       }) => toast.error(mensagem)
  //     )
  //     .finally(() => setIsLoad(false));
  // }, [agendamentoContext?.uuidAgendamento]);

  return { setPayment, handleSubmit, payment };
};
