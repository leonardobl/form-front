import React, { useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { PaymentsOptionsContainer } from "../../Atoms/PaymentsOptionsContainer";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";

export const PaymentTemplate = () => {
  const [payment, setPaymento] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    toast.info("Gerando pagamento");
    setTimeout(() => {
      window.open(`pagamento/${payment.toLowerCase()}`, "_self");
    }, 3000);
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Pagamento</S.Title>
        <S.Text>
          Selecione uma forma de <S.TextBlue>pagamento</S.TextBlue> para
          prosseguir.
        </S.Text>

        <S.WrapperPayments>
          <PaymentsOptionsContainer
            name="pagamento"
            required
            value="R$ 116.92"
            handleSelect={(e) => setPaymento(e)}
            iconLeft="assets/imgs/pix-icon.svg"
            textIcon="PIX"
          />

          <PaymentsOptionsContainer
            required
            handleSelect={(e) => setPaymento(e)}
            name="pagamento"
            value="R$ 118.50"
            iconLeft="assets/imgs/cod-barra.svg"
            textIcon="BOLETO"
          />

          <p>Confirmado na hora!</p>
          <p>Confirmado em até 3 dias úteis!</p>
        </S.WrapperPayments>

        <S.WrapperButton>
          <ButtonCustom typeOfButton="BlueLight">Gerar pagamento</ButtonCustom>
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
  );
};
