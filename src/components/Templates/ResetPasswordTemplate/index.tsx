import React from "react";

import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useResetPassword } from "./useResetPassword";

export const ResetPasswordTemplate = () => {
  const {
    checkPass,
    handleSubmit,
    inpConfirSenha,
    inpSenhaRef,
    form,
    setForm,
  } = useResetPassword();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Title>Recuperação de senha</Title>
        <S.Text>Digite sua nova senha.</S.Text>

        <S.FlexWrapper>
          <div>
            <Input
              label="Senha"
              required
              type="password"
              value={form?.senha}
              ref={inpSenhaRef}
              onChange={(e) => {
                setForm({ senha: e.target.value });
                checkPass && checkPass();
              }}
            />
          </div>

          <div>
            <Input
              required
              type="password"
              label="Confirmar Senha"
              ref={inpConfirSenha}
              onChange={(e) => checkPass && checkPass()}
            />
          </div>
          <div>
            <Button>Alterar</Button>
          </div>
        </S.FlexWrapper>
      </S.Form>
    </S.Container>
  );
};
