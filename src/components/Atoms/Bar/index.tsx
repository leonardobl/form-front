import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IMyBarProps extends ComponentProps<"div"> {}

export const Bar = (props: IMyBarProps) => {
  return <S.MyBar {...props} />;
};
