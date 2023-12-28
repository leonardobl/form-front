import React from "react";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export const PaymentPixTemplate = () => {
  function handleTicket() {
    window.open("boleto", "_self");
  }

  return (
    <S.Continer>
      <S.Content>
        <S.Title>Pagamento PIX</S.Title>
        <S.Text>
          Efetue o pagamento com o <S.TextStrong>QR CODE</S.TextStrong> gerado
          abaixo. Caso esteja no celular copie o{" "}
          <S.TextStrong>PIX</S.TextStrong> no botão abaixo, abra o app do banco
          de sua escolha e cole na área destinada ao{" "}
          <S.TextStrong>“PIX Copia e Cola”</S.TextStrong>.
        </S.Text>

        <S.Info>
          <p>
            <span>*</span>
            Seu agendamento só será realizado após a confirmação do pagamento.
          </p>
        </S.Info>

        <S.WrapperDataPayment>
          <S.Qrcode src="/assets/imgs/qrcode.jpg" />
          <S.DataPaymentContent>
            <PaymentCodContainer value={v4()} />
            <S.WrapperButtons>
              {/* <Link to={"/detalhe-pagamento"}>
                <ButtonCustom typeOfButton="Ghost">VER FATURA</ButtonCustom>
              </Link> */}
              <ButtonCustom typeOfButton="Ghost" onClick={handleTicket}>
                ALTERAR PARA BOLETO
              </ButtonCustom>
            </S.WrapperButtons>
          </S.DataPaymentContent>
        </S.WrapperDataPayment>
      </S.Content>
    </S.Continer>
  );
};
