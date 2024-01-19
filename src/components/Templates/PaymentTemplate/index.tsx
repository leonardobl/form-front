import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { PaymentsOptionsContainer } from "../../Atoms/PaymentsOptionsContainer";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";

import { useContextSite } from "../../../context/Context";
import { Pagamento } from "../../../services/Pagamento";
import { IFaturaDTO, IFaturaResponse } from "../../../types/pagamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { maskMoney } from "../../../utils/masks";

export const PaymentTemplate = () => {
  const [payment, setPaymento] = useState("");
  const { isLoad, setIsLoad } = useContextSite();
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const [pagamento, setPagamento] = useState<IFaturaResponse>(
    {} as IFaturaResponse
  );

  const taxaPix = 1.92;
  const taxaBoleto = 3.5;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    // toast.info("Gerando pagamento");
    window.open(`pagamento/${payment.toLowerCase()}`, "_self");
  }

  useEffect(() => {
    if (!agendamento) return;
    setIsLoad(true);

    Pagamento.gerarFatura({ uuidAgendamento: agendamento?.uuid })
      .then(({ data }) => {
        console.log(data);
        setPagamento(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, [agendamento]);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Pagamento</S.Title>
        <S.Text>
          Selecione uma forma de <S.TextBlue>pagamento</S.TextBlue> para
          prosseguir.
        </S.Text>

        <S.WrapperPayments>
          <div>
            <PaymentsOptionsContainer
              name="pagamento"
              required
              value={maskMoney(pagamento.items_total_cents + taxaPix)}
              handleSelect={(e) => setPaymento(e)}
              iconLeft="/assets/imgs/pix-icon.svg"
              textIcon="PIX"
            />
            <p>Confirmado na hora!</p>
          </div>

          <div>
            <PaymentsOptionsContainer
              required
              handleSelect={(e) => setPaymento(e)}
              name="pagamento"
              value={maskMoney(pagamento.items_total_cents + taxaBoleto)}
              iconLeft="/assets/imgs/cod-barra.svg"
              textIcon="BOLETO"
            />

            <p>Confirmado em até 3 dias úteis!</p>
          </div>
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
