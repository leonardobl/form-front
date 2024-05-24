import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { useHome } from "./useHome";

export const HomeTemplate = () => {
  const { navigate } = useHome();

  return (
    <S.Container>
      <S.Wrapper>
        <Text className="text">
          Escolha onde você deseja executar sua vistoria veicular, na{" "}
          <span className="textStrong">loja física</span> ou em{" "}
          <span className="textStrong">endereço de sua preferência</span>.
        </Text>

        <S.FlexWrapper>
          <Button onClick={() => navigate("/agendamento/loja")}>
            Loja Física
          </Button>

          <Button onClick={() => navigate("/agendamento/domicilio")}>
            Domicílio
          </Button>
        </S.FlexWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
