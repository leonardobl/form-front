import React, { ComponentProps, useEffect, useState } from "react";
import * as S from "./styles";
import { ISelectOptions } from "../../../types/inputs";

interface ISwitchOptionsProps extends ComponentProps<"div"> {
  optionA: ISelectOptions;
  IconA?: string;
  optionB: ISelectOptions;
  IconB?: string;
  handleOnChange: (s: string) => void;
  disabled?: boolean;
  value: string;
}

export const SwitchOptions = ({
  optionA,
  optionB,
  handleOnChange,
  IconA,
  IconB,
  disabled,
  value,
  ...rest
}: ISwitchOptionsProps) => {
  const name = `${new Date()} - ${Math.random()}`;

  return (
    <S.Container {...rest}>
      <S.Label data-disabled={disabled}>
        <S.WrapperContent>
          {IconA && <img className="icon" src={IconA} alt="Icone a" />}
          {optionA.label}
          <S.Input
            name={name}
            type="radio"
            // data-selected={optionA.value === value}
            checked={value ? optionA.value === value : true}
            onChange={() => handleOnChange(optionA.value)}
          />
        </S.WrapperContent>
      </S.Label>

      <S.Label data-disabled={disabled}>
        <S.WrapperContent>
          {IconB && <img className="icon" src={IconB} alt="Icone b" />}
          {optionB.label}
          <S.Input
            name={name}
            type="radio"
            disabled={disabled}
            // data-selected={optionB.value === value}
            checked={optionB.value === value}
            onChange={() => handleOnChange(optionB.value)}
          />
        </S.WrapperContent>
      </S.Label>
    </S.Container>
  );
};
