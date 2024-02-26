import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Link } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const HomeTemplate = () => {
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  return (
    <S.Container>
      <S.Wrapper>
        <Text className="text">
          Escolha onde você deseja executar sua vistoria veicular, na{" "}
          <span className="textStrong">loja física</span> ou em{" "}
          <span className="textStrong">endereço de sua preferência</span>.
        </Text>

        <S.FlexWrapper>
          <Link to={`/agendamento/${TipoAtendimentoEnum.LOJA.toLowerCase()}`}>
            <Button
              onClick={() =>
                setAgendamentoSession({
                  ...agendamentoSession,
                  tipoAtendimento: TipoAtendimentoEnum.LOJA,
                })
              }
            >
              Loja Física
            </Button>
          </Link>
          <Link
            to={`/agendamento/${TipoAtendimentoEnum.DOMICILIO.toLowerCase()}`}
          >
            <Button
              onClick={() =>
                setAgendamentoSession({
                  ...agendamentoSession,
                  tipoAtendimento: TipoAtendimentoEnum.DOMICILIO,
                })
              }
            >
              Domicílio
            </Button>
          </Link>
        </S.FlexWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
