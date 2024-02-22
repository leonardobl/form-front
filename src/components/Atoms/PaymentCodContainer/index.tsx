import React, { useEffect } from "react";
import * as S from "./styles";
import { toast } from "react-toastify";

type PaymentCodContainerProps = {
  value: string;
};

export const PaymentCodContainer = ({ value }: PaymentCodContainerProps) => {
  async function copyToClipboard(value: string) {
    await navigator.clipboard.writeText(value);
    toast.info("Codigo copiado!");
  }

  return (
    <S.Container>
      <S.Input value={value} readOnly />
      <img
        alt="icone copia e cola"
        src={"/assets/svgs/copy.svg"}
        onClick={() => copyToClipboard(value)}
      />
    </S.Container>
  );
};
