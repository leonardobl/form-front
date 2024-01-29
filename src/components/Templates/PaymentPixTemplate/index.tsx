import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { v4 } from "uuid";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { Pagamento } from "../../../services/Pagamento";
import { toast } from "react-toastify";
import { IFaturaDTO, IFaturaResponse } from "../../../types/pagamento";

export const PaymentPixTemplate = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const { isLoad, setIsLoad } = useContextSite();
  const [pagamento, setPagamento] = useState<IFaturaDTO>({} as IFaturaDTO);

  function handleTicket() {
    window.open("boleto", "_self");
  }

  useEffect(() => {
    if (!agendamento?.uuid) return;

    setIsLoad(true);

    Pagamento.consultarFatura({ uuidAgendamento: agendamento?.uuid })
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
          <S.Qrcode src={pagamento?.pix?.qrcode} />
          <S.DataPaymentContent>
            <PaymentCodContainer value={pagamento?.pix?.qrcodeText} />
            <S.WrapperButtons>
              {/* <Link to={"/detalhe-pagamento"}>
                <ButtonCustom typeOfButton="Ghost">VER FATURA</ButtonCustom>
              </Link> */}
              <Button data-variant-border onClick={handleTicket}>
                ALTERAR PARA BOLETO
              </Button>
            </S.WrapperButtons>
          </S.DataPaymentContent>
        </S.WrapperDataPayment>
      </S.Content>
    </S.Continer>
  );
};
