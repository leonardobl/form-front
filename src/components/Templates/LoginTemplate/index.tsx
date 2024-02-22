import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { TextField } from "@mui/material";
import { Button } from "../../Atoms/Button";
import { useLogin } from "./useLogin";

export const LoginTemplate = () => {
  const { form, setForm, handleCpf, handleSubmit } = useLogin();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title className="title">LOGIN</Title>

        <S.Form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="CPF/ CNPJ"
              required
              fullWidth
              inputProps={{ maxLength: "18" }}
              variant="standard"
              value={form?.cpfCNPJ}
              onChange={(e) => {
                handleCpf(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              label="Senha"
              required
              fullWidth
              variant="standard"
              type="password"
              value={form.senha}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, senha: e.target.value }))
              }
            />
          </div>

          <a href="#">Esqueceu sua senha?</a>

          <Button>Entrar</Button>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
