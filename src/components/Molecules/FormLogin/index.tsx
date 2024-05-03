import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputRHF } from "../../Atoms/InputsRHF/InputRHF";
import { MessageErroForm } from "../../Atoms/MessageErroForm";
import { Button } from "../../Atoms/Button";
import { useFormLogin } from "./useFormLogin";
import { IAutenticacaoForm } from "../../../types/autenticacao";

interface IFormLoginProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IAutenticacaoForm) => void;
}

export const FormLogin = ({ onSubmitForm, ...rest }: IFormLoginProps) => {
  const { errors, handleSubmit, navigate, register } = useFormLogin();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
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
  );
};
