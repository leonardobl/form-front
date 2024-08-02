import { ComponentProps, useState } from "react";
import * as S from "./styles";

export interface IInputCheckSlideProps extends ComponentProps<"input"> {
  label?: string;
}

export const InputCheckSlide = (props: IInputCheckSlideProps) => {
  const [isChecked, setIsChecked] = useState(!!props.checked);

  return (
    <S.CustomInputRadioSlideContainer checked={isChecked}>
      <S.CustomInputRadioSlide
        checked={isChecked}
        {...props}
        type="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {props.label && <span>{props.label}</span>}
    </S.CustomInputRadioSlideContainer>
  );
};
