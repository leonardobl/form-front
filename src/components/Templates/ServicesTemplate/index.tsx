import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text/styles";
import { Button } from "../../Atoms/Button";

export const ServicesTemplate = () => {
  return (
    <S.Container>
      <Text>
        Escolha qual <span className="textStrong">serviço</span> você deseja
        realizar.
      </Text>

      <S.FlexWrapper>
        <Button>1° Emplacamento</Button>
        <Button>Vistoria</Button>
      </S.FlexWrapper>
    </S.Container>
  );
};
