import React from "react";
import * as S from "./styles";

type InputCustomProps = {
  label?: string;
  required?: boolean;
};

export const InputCustom = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputCustomProps
) => {
  return (
    <S.Container>
      {props.label && (
        <S.Label $isRequired={!!props.required}>
          {props.label}
          <span>*</span>
        </S.Label>
      )}
      <S.Input {...props} />
    </S.Container>
  );
};
