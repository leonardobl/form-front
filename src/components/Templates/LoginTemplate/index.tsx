import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonHome } from "../../Atoms/ButtonHome";

export const LoginTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <p>
          Faça <span>login</span> ou <span>cadastre-se</span> para agendar sua
          vistoria.
        </p>
        <S.WrapperButtons>
          <ButtonHome>LOGIN</ButtonHome>
          <ButtonHome>CADASTRO</ButtonHome>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
