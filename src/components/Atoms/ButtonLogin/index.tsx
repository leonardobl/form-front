import React from "react";
import * as S from "./styles";

export const ButtonLogin = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <S.Button {...props}></S.Button>;
};
