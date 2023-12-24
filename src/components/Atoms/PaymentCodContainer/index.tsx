import React from "react";
import * as S from "./styles";

type PaymentCodContainerProps = {
  value: string;
};

export const PaymentCodContainer = ({ value }: PaymentCodContainerProps) => {
  return (
    <S.Container>
      <S.Input value={value} readOnly />
      <img alt="icone copia e cola" src={"/assets/imgs/past-icon.svg"} />
    </S.Container>
  );
};
