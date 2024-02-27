import React, { ComponentProps, useEffect, useState } from "react";
import * as S from "./styles";
import { ISelectOptions } from "../../../types/inputs";

interface ISwitchOptionsProps extends ComponentProps<"div"> {
  optionA: ISelectOptions;
  IconA?: string;
  optionB: ISelectOptions;
  IconB?: string;
  handleOnChange: (s: string) => void;
}

export const SwitchOptions = ({
  optionA,
  optionB,
  handleOnChange,
  IconA,
  IconB,
  ...rest
}: ISwitchOptionsProps) => {
  const name = `${new Date()} - ${Math.random()}`;
  const [value, setValue] = useState(optionA.value);

  useEffect(() => {
    handleOnChange(value);
  }, [value]);

  return (
    <S.Container {...rest}>
      <S.Label>
        <S.WrapperContent>
          {IconA && <img className="icon" src={IconA} alt="Icone a" />}
          {optionA.label}
          <S.Input
            name={name}
            type="radio"
            data-selected={optionA.value === value}
            checked={optionA.value === value}
            onChange={() => setValue(optionA.value)}
          />
        </S.WrapperContent>
      </S.Label>

      <S.Label>
        <S.WrapperContent>
          {IconB && <img className="icon" src={IconB} alt="Icone b" />}
          {optionB.label}
          <S.Input
            name={name}
            type="radio"
            data-selected={optionB.value === value}
            checked={optionB.value === value}
            onChange={() => setValue(optionB.value)}
          />
        </S.WrapperContent>
      </S.Label>
    </S.Container>
  );
};
