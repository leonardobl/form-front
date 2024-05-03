import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { useLogin } from "./useLogin";
import { MessageErroForm } from "../../Atoms/MessageErroForm";
import { InputRHF } from "../../Atoms/InputsRHF/InputRHF";

export const LoginTemplate = () => {
  const { handleSubmit, navigate, errors, onSubmitForm, register } = useLogin();

  return (
    <S.Container>
      <Title className="title">LOGIN</Title>

      <S.Form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <InputRHF
            {...register("cpfCNPJ")}
            label="CPF/ CNPJ"
            required
            maxLength={18}
          />

          {errors?.cpfCNPJ?.message && (
            <MessageErroForm>{errors?.cpfCNPJ?.message}</MessageErroForm>
          )}
        </div>
        <div>
          <InputRHF
            {...register("senha")}
            label="Senha"
            required
            type="password"
          />

          {errors?.senha?.message && (
            <MessageErroForm>{errors?.senha?.message}</MessageErroForm>
          )}
        </div>

        {/* <S.ButtonForgot
          onClick={() => navigate("/agendamento/recuperar-senha")}
        >
          Esqueceu sua senha ?
        </S.ButtonForgot> */}

        <Button className="button">Entrar</Button>
      </S.Form>
    </S.Container>
  );
};
