import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { usePixCancellation } from "./usePixCancellation";

export const PixCancellationTemplate = () => {
  const { handleNavigate } = usePixCancellation();

  return (
    <S.Container>
      <Title>Confirmação de Cancelamento</Title>

      <h4>
        <img src="/assets/svgs/confirmacao.svg" alt="icone check" />{" "}
        Cancelamento <span>confirmado.</span>
      </h4>

      <Button onClick={handleNavigate}>Novo Agendamento</Button>

      <S.Info>
        <p>
          O reembolso via <span>PIX</span> será efetuado para a mesma conta
          bancária que realizou o pagamento.
        </p>
      </S.Info>
    </S.Container>
  );
};
