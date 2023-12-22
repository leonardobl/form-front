import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

export const LoginTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <p>
          Faça <span>login</span> ou <span>cadastre-se</span> para agendar sua
          vistoria.
        </p>
        <S.WrapperButtons>
          <ButtonCustom typeOfButton="BlueDark">LOGIN</ButtonCustom>
          <ButtonCustom typeOfButton="BlueLight">CADASTRO</ButtonCustom>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
