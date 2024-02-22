import React from "react";
import * as S from "./styles";

type PaymentsOptionsContainerProps = {
  iconLeft: string;
  textIcon: string;
  value: string;
  name: string;
  required?: boolean;
  handleSelect: (e: string) => void;
};

export const PaymentsOptionsContainer = ({
  value,
  iconLeft,
  textIcon,
  required,
  name,
  handleSelect,
}: PaymentsOptionsContainerProps) => {
  return (
    <S.Label>
      <S.WrapperLeftContent>
        <S.Icon src={iconLeft} />
        <S.TextIcon>{textIcon}</S.TextIcon>
      </S.WrapperLeftContent>
      <S.Value>{value}</S.Value>
      <S.Input
        required={required}
        type="radio"
        name={name}
        onChange={() => handleSelect(textIcon)}
      />
    </S.Label>
  );
};
