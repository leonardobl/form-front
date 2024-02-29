import React from "react";
import * as S from "./styles";
import { Title } from "../OfflineTemplate/styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useForgotPassword } from "./useForgotPassword";

export const ForgotPasswordTemplate = () => {
  const { handleSubmit, form, setForm } = useForgotPassword();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Title>Esqueceu sua senha?</Title>

        <Text>Coloque o seu e-mail e enviaremos um link para alterá-la.</Text>

        <Input
          value={form.email}
          onChange={(e) => setForm({ email: e.target.value })}
          type="email"
          required
          label="E-mail"
        />

        <Button>Enviar e-mail</Button>
      </S.Form>
    </S.Container>
  );
};
