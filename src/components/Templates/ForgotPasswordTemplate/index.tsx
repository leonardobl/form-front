import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useForgotPassword } from "./useForgotPassword";
import { Title } from "../../Atoms/Title";

export const ForgotPasswordTemplate = () => {
  const { handleSubmit, form, handleCpf } = useForgotPassword();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Title>Esqueceu sua senha?</Title>

        <Text>
          Coloque o seu <span className="textStrong">CPF/CNPJ</span> e
          enviaremos um <span className="textStrong">link</span> para alterá-la.
        </Text>

        <Input
          value={form.cpfCnpj}
          required
          label="CPF/CNPJ"
          onChange={(e) => handleCpf(e.target.value)}
          maxLength={18}
        />

        <Button>Solicitar link</Button>
      </S.Form>
    </S.Container>
  );
};
