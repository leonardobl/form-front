import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

export const LoginTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form>
          <S.Header>
            <h1>Entrar</h1>
          </S.Header>
          <S.FormContent>
            <S.Grid $gridTemplate="1fr">
              <label>E-mail</label>
              <InputCustom type="email" />
            </S.Grid>

            <S.Grid $gridTemplate="1fr">
              <label>Senha</label>
              <InputCustom type="password" />
              <a href="#">Esqueceu a senha?</a>
            </S.Grid>

            <S.WrapperButton>
              <Link to={"/buscar-veiculo"}>
                <ButtonCustom typeOfButton="Login">Login</ButtonCustom>
              </Link>
            </S.WrapperButton>
          </S.FormContent>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
