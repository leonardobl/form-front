import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { useLogin } from "./useLogin";
import { FormLogin } from "../../Molecules/FormLogin";

export const LoginTemplate = () => {
  const { onSubmitForm } = useLogin();

  return (
    <S.Container>
      <Title className="title">LOGIN</Title>
      <FormLogin onSubmitForm={onSubmitForm} />
    </S.Container>
  );
};
