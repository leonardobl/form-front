import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Button } from "../../Atoms/Button";
import { Link } from "react-router-dom";

export const LoginRegisterTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <Text className="text">
          Faça <span className="textStrong">login</span> ou{" "}
          <span className="textStrong">cadastre-se</span> para agendar sua
          vistoria.
        </Text>

        <S.FlexWrapper>
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
          <Link to={"/cadastro-usuario"}>
            <Button>Cadastro</Button>
          </Link>
        </S.FlexWrapper>
      </S.Container>
    </LayoutTemplate>
  );
};
