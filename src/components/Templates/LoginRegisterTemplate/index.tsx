import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
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
            <Button>LOGIN</Button>
          </Link>
          <Link to={"/cadastro-acesso"}>
            <Button data-variant-dark>CADASTRO</Button>
          </Link>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
