import React from "react";

import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Button } from "../../Atoms/Button";
import { useLoginRegister } from "./useLoginRegister";

export const LoginRegisterTemplate = () => {
  const { handleLogin, handleRegister } = useLoginRegister();

  return (
    <S.Container>
      <Text className="text">
        Faça <span className="textStrong">login</span> ou{" "}
        <span className="textStrong">cadastre-se</span> para agendar sua
        vistoria.
      </Text>

      <S.FlexWrapper>
        <Button onClick={handleLogin}>Login</Button>

        <Button onClick={handleRegister}>Cadastro</Button>
      </S.FlexWrapper>
    </S.Container>
  );
};
