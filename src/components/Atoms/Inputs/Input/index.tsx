import React, { useState } from "react";
import * as S from "./styles";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <S.Container>
        {props.label && (
          <S.Label $isRequired={!!props.required}>
            {props.label}
            <span>*</span>
          </S.Label>
        )}

        <S.Input
          $typeInput={props.type}
          {...props}
          type={eyeOpen ? "text" : props.type}
          onWheel={(event) => event.currentTarget.blur()}
          ref={ref}
        />
        {props.type === "password" ? (
          eyeOpen ? (
            <IoEyeSharp onClick={handleTypeChange} />
          ) : (
            <IoEyeOffSharp onClick={handleTypeChange} />
          )
        ) : null}
      </S.Container>
    );
  }
);
