import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";

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
          </S.FormContent>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
