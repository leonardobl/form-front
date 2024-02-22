import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { useContextSite } from "../../../context/Context";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Link } from "react-router-dom";

export const HomeTemplate = () => {
  const { agendamentoContext, setAgendamentoContext } = useContextSite();

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Wrapper>
          <Text className="text">
            Escolha onde você deseja executar sua vistoria veicular, na{" "}
            <span className="textStrong">loja física</span> ou em{" "}
            <span className="textStrong">endereço de sua preferência</span>.
          </Text>

          <S.FlexWrapper>
            <Link to={`/${TipoAtendimentoEnum.LOJA.toLowerCase()}`}>
              <Button
                onClick={() =>
                  setAgendamentoContext({
                    ...agendamentoContext,
                    tipoAtendimento: TipoAtendimentoEnum.LOJA,
                  })
                }
              >
                Loja Física
              </Button>
            </Link>
            <Link to={`/${TipoAtendimentoEnum.DOMICILIO.toLowerCase()}`}>
              <Button
                onClick={() =>
                  setAgendamentoContext({
                    ...agendamentoContext,
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
    </LayoutTemplate>
  );
};
