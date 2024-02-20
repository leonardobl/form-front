import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ICustomButton extends ComponentProps<"button"> {}

export const Button = (props: ICustomButton) => {
  return <S.Button {...props} />;
};
