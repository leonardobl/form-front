import React, { ComponentProps, useEffect, useState } from "react";
import * as S from "./styles";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { ISelectOptions } from "../../../types/inputs";

interface ISwitchOptionsProps extends ComponentProps<"div"> {
  optionA: ISelectOptions;
  optionB: ISelectOptions;
  value: any;
  name: string;
  handleOnChange: (s: string) => void;
}

export const SwitchOptions = ({
  optionA,
  optionB,
  handleOnChange,
  value,
  name,
  ...rest
}: ISwitchOptionsProps) => {
  return (
    <S.Container {...rest}>
      <S.Label>
        {optionA.label}
        <S.Input
          name={name}
          type="radio"
          data-selected={optionA.value === value}
          checked={optionA.value === value}
          onChange={() => handleOnChange(optionA.value)}
        />
      </S.Label>

      <S.Label>
        {optionB.label}
        <S.Input
          name="option"
          type="radio"
          data-selected={optionB.value === value}
          checked={optionB.value === value}
          onChange={() => handleOnChange(optionB.value)}
        />
      </S.Label>
    </S.Container>
  );
};
