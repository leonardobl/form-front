import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IIConEyeProps extends ComponentProps<"img"> {}

export const IconEye = (props: IIConEyeProps) => {
  return <S.MyEye {...props} alt="icone de olho" src="/assets/svgs/eye.svg" />;
};
