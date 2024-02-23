import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ITitleProps extends ComponentProps<"h1"> {}

export const Title = (props: ITitleProps) => {
  return <S.MyTitle {...props} />;
};
