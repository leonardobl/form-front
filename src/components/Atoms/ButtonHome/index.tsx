import React from "react";
import * as S from "./styles";

export const ButtonHome = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <S.Button {...props}></S.Button>;
};
