import React, { useState } from "react";

import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { PaymentsOptionsContainer } from "../../Atoms/PaymentsOptionsContainer";
import { Button } from "../../Atoms/Button";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { usePayment } from "./usePayment";

export const PaymentTemplate = () => {
  const { handleSubmit, setPayment, payment, btnFaturaGerada, setBtnFaturaGerada } = usePayment();
  
  return (
    <S.Container>
      <Title>Pagamento</Title>

      <Text>
        Selecione uma forma de <span className="textStrong">pagamento</span>{" "}
        para prosseguir
      </Text>

      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <PaymentsOptionsContainer
              iconLeft={
                payment === FormaPagamentoEnum.PIX
                  ? "/assets/svgs/pix-dark.svg"
                  : "/assets/svgs/pix-light.svg"
              }
              textIcon={"Pix"}
              value=""
              name={"pagamento"}
              required
              handleSelect={() => setPayment(FormaPagamentoEnum.PIX)}
            />
            <p className="legend">Confirmado na hora!</p>
          </div>
          <div>
            <PaymentsOptionsContainer
              required
              iconLeft={
                payment === FormaPagamentoEnum.BOLETO
                  ? "/assets/svgs/boleto-dark.svg"
                  : "/assets/svgs/boleto-light.svg"
              }
              textIcon={"Boleto"}
              value=""
              name={"pagamento"}
              handleSelect={() => setPayment(FormaPagamentoEnum.BOLETO)}
            />
            <p className="legend">
              Confirmado em até <span>3 dias úteis!</span>
            </p>
          </div>
          <div>
          <Button disabled={btnFaturaGerada}>
            AVANÇAR
          </Button>
          </div>
        </S.GridWrapper>
      </S.Form>

      <S.Info>
        <span className="textRed">*</span>Taxa será acrescida no valor da
        compra. Taxa bancária no <span className="textStrong">PIX</span> de{" "}
        <span className="textStrong">1,53%.</span> Taxa bancária no{" "}
        <span className="textStrong">Boleto</span> no valor de{" "}
        <span className="textStrong">R$ 3,92.</span>
      </S.Info>
    </S.Container>
  );
};
