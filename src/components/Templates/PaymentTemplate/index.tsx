import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { PaymentsOptionsContainer } from "../../Atoms/PaymentsOptionsContainer";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

export const PaymentTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form>
          <S.Title>Pagamento</S.Title>
          <S.Text>
            Selecione uma forma de <S.TextBlue>pagamento</S.TextBlue> para
            prosseguir.
          </S.Text>

          <S.WrapperPayments>
            <PaymentsOptionsContainer
              value="R$ 116.92"
              iconLeft="assets/imgs/pix-icon.svg"
              textIcon="PIX"
            />

            <PaymentsOptionsContainer
              value="R$ 118.50"
              iconLeft="assets/imgs/cod-barra.svg"
              textIcon="BOLETO"
            />

            <p>Confirmado na hora!</p>
            <p>Confirmado em até 3 dias úteis!</p>
          </S.WrapperPayments>

          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">
              Gerar pagamento
            </ButtonCustom>
          </S.WrapperButton>
        </S.Form>
        <S.TextFooter>
          <S.TextRed>*</S.TextRed> Taxa será acrescida no valor da compra. Taxa
          bancária no <S.TextStrong>PIX</S.TextStrong> no valor de{" "}
          <S.TextGreen>R$ 1,92</S.TextGreen>. Taxa bancária no{" "}
          <S.TextStrong>Boleto</S.TextStrong> no valor de{" "}
          <S.TextGreen>R$ 3,50</S.TextGreen>.
        </S.TextFooter>
      </S.Container>
    </LayoutTemplate>
  );
};
