import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginTemplate = () => {
  const [token, setToken] = useSessionStorage("@token");

  function login(e: React.SyntheticEvent) {
    e.preventDefault();

    setToken(v4());
    toast.success("Sucesso no login!");
    setTimeout(() => {
      window.open("/opcoes-servicos", "_self");
    }, 3000);
  }

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={login}>
          <S.Header>
            <h1>Entrar</h1>
          </S.Header>
          <S.FormContent>
            <S.Grid $gridTemplate="1fr">
              <label>E-mail</label>
              <InputCustom type="email" required />
            </S.Grid>

            <S.Grid $gridTemplate="1fr">
              <label>Senha</label>
              <InputCustom type="password" required />
              {/* <a href="#">Esqueceu a senha?</a> */}
            </S.Grid>

            <S.WrapperButton>
              <ButtonCustom typeOfButton="Login">Login</ButtonCustom>
            </S.WrapperButton>
          </S.FormContent>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
