import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";

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
          <Link to={"/cadastro"}>
            <ButtonCustom typeOfButton="BlueLight">CADASTRO</ButtonCustom>
          </Link>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
