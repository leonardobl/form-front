import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { SwitchOptions } from "../../Atoms/SwitchOptions";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { useTicketCancellation } from "./useTicketCancellation";
import { TipoPagamento } from "../../../enums/tipoPagamento";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";

export const TicketCancellationTemplate = () => {
  const { tipoPagamento, setTipoPagamento } = useTicketCancellation();

  return (
    <S.Container>
      <Title>Formulário de Reembolso</Title>

      <Text>
        Selecione a <span className="textStrong">forma de reembolso</span>.
      </Text>

      <S.WrapperPayment>
        <SwitchOptions
          value={tipoPagamento}
          IconA="/assets/svgs/pix1.svg"
          IconB="/assets/svgs/deposito.svg"
          optionA={{
            label: "Pix",
            value: FormaPagamentoEnum.PIX,
          }}
          optionB={{
            label: "Depósito",
            value: FormaPagamentoEnum.DEPOSITO,
          }}
          className="paymentSwitch"
          handleOnChange={(v) => setTipoPagamento(FormaPagamentoEnum[v])}
        />
      </S.WrapperPayment>
      <Title>Reembolso via PIX</Title>

      {tipoPagamento === FormaPagamentoEnum.PIX ? (
        <S.FormPix>
          <div>
            <Input label="Titular" required />
          </div>

          <div>
            <Input label="Chave PIX" required />
          </div>

          <Button>Confirmar</Button>
        </S.FormPix>
      ) : (
        <S.FormTicket></S.FormTicket>
      )}
    </S.Container>
  );
};
