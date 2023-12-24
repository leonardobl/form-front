import React from "react";
import * as S from "./styles";

type PaymentsOptionsContainerProps = {
  iconLeft: string;
  textIcon: string;
  value: string;
};

export const PaymentsOptionsContainer = ({
  value,
  iconLeft,
  textIcon,
}: PaymentsOptionsContainerProps) => {
  return (
    <S.container>
      <S.WraperLeftContent>
        <S.Icon src={iconLeft} />
        <S.TextIcon>{textIcon}</S.TextIcon>
      </S.WraperLeftContent>
      <S.Text>{value}</S.Text>
    </S.container>
  );
};
