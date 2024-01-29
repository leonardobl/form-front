import React from "react";
import * as S from "./styles";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}
export const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} $disabled={props.disabled} />;
};
