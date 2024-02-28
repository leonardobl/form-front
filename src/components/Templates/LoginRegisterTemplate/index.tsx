import React from "react";

import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Button } from "../../Atoms/Button";
import { Link } from "react-router-dom";
import { useLoginRegister } from "./useLoginRegister";

export const LoginRegisterTemplate = () => {
  const { params } = useLoginRegister();

  return (
    <S.Container>
      <Text className="text">
        Faça <span className="textStrong">login</span> ou{" "}
        <span className="textStrong">cadastre-se</span> para agendar sua
        vistoria.
      </Text>

      <S.FlexWrapper>
        <Link to={`/agendamento/${params.uuidAgendamento}/login`}>
          <Button>Login</Button>
        </Link>
        <Link to={`/agendamento/${params.uuidAgendamento}/cadastro-usuario`}>
          <Button>Cadastro</Button>
        </Link>
      </S.FlexWrapper>
    </S.Container>
  );
};
