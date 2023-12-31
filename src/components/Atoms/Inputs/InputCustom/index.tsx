import React from "react";
import * as S from "./styles";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export const InputCustom = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    return (
      <S.Container>
        {props.label && (
          <S.Label $isRequired={!!props.required}>
            {props.label}
            <span>*</span>
          </S.Label>
        )}
        <S.Input
          {...props}
          onWheel={(event) => event.currentTarget.blur()}
          ref={ref}
        />
      </S.Container>
    );
  }
);
