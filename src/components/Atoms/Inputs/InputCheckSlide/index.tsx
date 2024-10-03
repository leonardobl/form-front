import { ComponentProps, useState } from "react";
import * as S from "./styles";

export interface IInputCheckSlideProps extends ComponentProps<"input"> {
  label?: string;
}

export const InputCheckSlide = (props: IInputCheckSlideProps) => {
  const [isChecked, setIsChecked] = useState(!!props.checked);

  return (
    <S.CustomLabel htmlFor="customCheck">
      <S.CustomInput
        {...props}
        checked={isChecked}
        onChange={(e) => {
          props?.onChange && props?.onChange(e);
          setIsChecked((prev) => !prev);
        }}
        type="checkbox"
        id="customCheck"
      />
      {props?.label && <span>{props.label}</span>}
    </S.CustomLabel>
  );
};
