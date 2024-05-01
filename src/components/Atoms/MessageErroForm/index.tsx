import React from "react";
import * as S from "./styles";

interface IMessageErroFormProps extends React.ComponentProps<"p"> {}

export const MessageErroForm = (props: IMessageErroFormProps) => {
  return <S.MyMessage {...props} />;
};
