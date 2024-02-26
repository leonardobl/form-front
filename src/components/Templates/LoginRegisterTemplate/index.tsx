import React, { useEffect } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Button } from "../../Atoms/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const LoginRegisterTemplate = () => {
  const params = useParams();

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
