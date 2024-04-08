import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { Button } from "../../Atoms/Button";

export const PixConfirmationTemplate = () => {
  return (
    <S.Container>
      <Title>Pagamento PIX</Title>

      <S.WrapperText>
        <img src="/assets/svgs/confirmacao.svg" alt="icone de confirmacao" />
        <Text>
          Pagamento <span className="textStrong">confirmado</span>.
        </Text>
      </S.WrapperText>
      <Button>Realizar Agendamento</Button>
    </S.Container>
  );
};
