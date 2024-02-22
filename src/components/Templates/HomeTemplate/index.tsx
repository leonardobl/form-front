import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { useContextSite } from "../../../context/Context";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

export const HomeTemplate = () => {
  const { agendamentoContext, setAgendamentoContext } = useContextSite();

  function handleClick({
    tipoAtendimento,
  }: {
    tipoAtendimento: TipoAtendimentoEnum;
  }) {
    setAgendamentoContext({ ...agendamentoContext, tipoAtendimento });
    window.open(`/${tipoAtendimento.toLowerCase()}`, "_self");
  }

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
            <Button
              onClick={() =>
                handleClick({ tipoAtendimento: TipoAtendimentoEnum.LOJA })
              }
            >
              Loja Física
            </Button>
            <Button
              onClick={() =>
                handleClick({
                  tipoAtendimento: TipoAtendimentoEnum.DOMICILIO,
                })
              }
            >
              Domicílio
            </Button>
          </S.FlexWrapper>
        </S.Wrapper>
      </S.Container>
    </LayoutTemplate>
  );
};
