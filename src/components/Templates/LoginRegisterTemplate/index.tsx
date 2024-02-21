import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Text } from "../../Atoms/Text/styles";
import { Button } from "../../Atoms/Button";

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
          <Button onClick={() => window.open("/login", "_self")}>Login</Button>
          <Button onClick={() => window.open("/cadastro-usuario", "_self")}>
            Cadastro
          </Button>
        </S.FlexWrapper>
      </S.Container>
    </LayoutTemplate>
  );
};
