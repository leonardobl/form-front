import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles.ts";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterTemplate = () => {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    toast.success("Cadastro realizado com sucesso!");
    setTimeout(() => {
      window.open("/login", "_self");
    }, 3000);
  }

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.Form onSubmit={handleSubmit}>
            <S.Header>
              <h1>Cadastro</h1>
            </S.Header>
            <S.WrapperContentForm>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Nome <span>*</span>
                </label>
                <InputCustom placeholder="DIGITE SEU NOME COMPLETO" required />
              </S.Grid>
              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  CPF <span>*</span>
                </label>
                <label>
                  Telefone <span>*</span>
                </label>
                <InputCustom required />
                <InputCustom placeholder="(xx) xxxxx-xx" required />
              </S.Grid>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Endereço (Rua) <span>*</span>
                </label>
                <InputCustom placeholder="Rua" required />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Número <span>*</span>
                </label>
                <label>Complemento</label>
                <InputCustom required />
                <InputCustom />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Bairro <span>*</span>
                </label>
                <label>
                  Cidade <span>*</span>
                </label>
                <InputCustom required />
                <InputCustom required />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  UF <span>*</span>
                </label>
                <label>
                  CEP <span>*</span>
                </label>
                <InputCustom required />
                <InputCustom required />
              </S.Grid>

              <S.Grid $gridTemplate="1fr">
                <label>
                  E-mail <span>*</span>
                </label>
                <InputCustom required />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Senha <span>*</span>
                </label>
                <label>
                  Confirmar Senha <span>*</span>
                </label>
                <InputCustom required />
                <InputCustom required />
              </S.Grid>

              <S.WrapperButton>
                <ButtonCustom typeOfButton="Login">Criar Conta</ButtonCustom>
              </S.WrapperButton>
            </S.WrapperContentForm>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
