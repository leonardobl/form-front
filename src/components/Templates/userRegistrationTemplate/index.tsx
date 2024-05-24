import React from "react";
import * as S from "./styles";

import { useUserRegistration } from "./useUserRegistration";
import { Title } from "../../Atoms/Title";

import { FormUserRegister } from "../../Molecules/FormUserRegister";

export const UserRegistrationTemplate = () => {
  const { handleSubmit } = useUserRegistration();

  return (
    <S.Container>
      <Title>CADASTRO</Title>
      <FormUserRegister onSubmitForm={handleSubmit} />
    </S.Container>
  );
};
