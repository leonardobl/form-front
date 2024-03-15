import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { useLogin } from "./useLogin";
import { Input } from "../../Atoms/Inputs/Input";

export const LoginTemplate = () => {
  const { form, setForm, handleCpf, handleSubmit, navigate } = useLogin();

  return (
    <S.Container>
      <Title className="title">LOGIN</Title>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <Input
            label="CPF/ CNPJ"
            required
            maxLength={18}
            value={form?.cpfCNPJ}
            onChange={(e) => {
              handleCpf(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            label="Senha"
            required
            type="password"
            value={form.senha}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, senha: e.target.value }))
            }
          />
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
