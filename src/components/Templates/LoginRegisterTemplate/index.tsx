import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";

export const LoginRegisterTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <p>
          Faça <span>login</span> ou <span>cadastre-se</span> para agendar sua
          vistoria.
        </p>
        <S.WrapperButtons>
          <Link to={"/login"}>
            <ButtonCustom typeOfButton="BlueLight">LOGIN</ButtonCustom>
          </Link>
          <Link to={"/cadastro"}>
            <ButtonCustom typeOfButton="BlueDark">CADASTRO</ButtonCustom>
          </Link>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
