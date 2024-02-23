import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ITextProps extends ComponentProps<"p"> {}

export const Text = (props: ITextProps) => {
  return <S.MyText {...props} />;
};
