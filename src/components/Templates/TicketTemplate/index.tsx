import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { Button } from "../../Atoms/Button";

export const TicketTemplate = () => {
  return (
    <S.Container>
      <Title>Pagamento Boleto</Title>
      <Text>
        Efetue pagamento scaneando o{" "}
        <span className="textStrong">código de barras</span> gerado abaixo. Caso
        esteja no celular <span className="textStrong">copie</span> o código de
        barras, abra o app do banco de sua escolha e cole na área destinada ao “
        <span className="textStrong">Pagar boleto por código de barras</span>”.
      </Text>

      <S.Info>
        <span>*</span>Seu agendamento só será realizado após a confirmação do
        pagamento.
      </S.Info>

      <S.GridWrapper>
        <div>
          <S.BarCodeImg src="/assets/svgs/barcode.svg" alt="codigo de barras" />
        </div>
        <div>
          <p>Valor: R$155,92</p>
        </div>
        <div>
          <PaymentCodContainer value={""} />
        </div>

        <div>
          <Button>VER FATURA</Button>
        </div>

        <div>
          <Button>ALTERAR PARA PIX</Button>
        </div>
      </S.GridWrapper>
    </S.Container>
  );
};
