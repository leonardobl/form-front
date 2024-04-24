import React, { useState } from "react";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";

export const useTicketCancellation = () => {
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>(
    FormaPagamentoEnum.PIX
  );
  return { tipoPagamento, setTipoPagamento };
};
