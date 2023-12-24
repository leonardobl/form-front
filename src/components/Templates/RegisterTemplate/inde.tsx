import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles.ts";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";

export const RegisterTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.Form>
            <S.Header>
              <h1>Cadastro</h1>
            </S.Header>
            <S.WrapperContentForm>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Nome <span>*</span>
                </label>
                <InputCustom placeholder="DIGITE SEU NOME COMPLETO" />
              </S.Grid>
              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  CPF <span>*</span>
                </label>
                <label>
                  Telefone <span>*</span>
                </label>
                <InputCustom />
                <InputCustom placeholder="(xx) xxxxx-xx" />
              </S.Grid>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Endereço (Rua) <span>*</span>
                </label>
                <InputCustom placeholder="Rua" />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Número <span>*</span>
                </label>
                <label>Complemento</label>
                <InputCustom />
                <InputCustom />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Bairro <span>*</span>
                </label>
                <label>
                  Cidade <span>*</span>
                </label>
                <InputCustom />
                <InputCustom />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  UF <span>*</span>
                </label>
                <label>
                  CEP <span>*</span>
                </label>
                <InputCustom />
                <InputCustom />
              </S.Grid>

              <S.Grid $gridTemplate="1fr">
                <label>
                  E-mail <span>*</span>
                </label>
                <InputCustom />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Senha <span>*</span>
                </label>
                <label>
                  Confirmar Senha <span>*</span>
                </label>
                <InputCustom />
                <InputCustom />
              </S.Grid>

              <S.WrapperButton>
                <Link to="/login">
                  <ButtonCustom typeOfButton="Login">Criar Conta</ButtonCustom>
                </Link>
              </S.WrapperButton>
            </S.WrapperContentForm>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
