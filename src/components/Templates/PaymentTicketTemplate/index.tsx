import React, { useEffect } from "react";
import * as S from "./styles";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { v4 } from "uuid";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { Pagamento } from "../../../services/Pagamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { toast } from "react-toastify";

export const PaymentTicketTemplate = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");

  const { isLoad, setIsLoad } = useContextSite();

  function handlePix() {
    window.open("pix", "_self");
  }

  useEffect(() => {
    if (!agendamento?.uuid) return;

    setIsLoad(true);

    Pagamento.consultarFatura({ uuidAgendamento: agendamento?.uuid })
      .then(({ data }) => {
        console.log(data);
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
      <S.Content>
        <S.Title>Pagamento Boleto</S.Title>
        <S.Text>
          Efetue pagamento scaneando o{" "}
          <S.TextStrong>código de barras</S.TextStrong> gerado abaixo. Caso
          esteja no celular copie o código de barras no botão abaixo, abra o app
          do banco de sua escolha e cole na área destinada ao{" "}
          <S.TextStrong>“Pagar boleto por código de barras”</S.TextStrong>.
        </S.Text>
        <S.Info>
          <p>
            <span>*</span>
            Seu agendamento só será realizado após a confirmação do pagamento.
          </p>
        </S.Info>
        <S.CodBarImg
          src="/assets/imgs/bar.jpg"
          alt="Codigo de barras
        "
        />
        <S.WrapperCod>
          <PaymentCodContainer value={v4()} />
        </S.WrapperCod>
        <S.WrapperButtons>
          {/* <Link to={"/detalhe-pagamento"}>
            <ButtonCustom typeOfButton="Ghost">VER FATURA</ButtonCustom>
          </Link> */}
          <ButtonCustom typeOfButton="Ghost" onClick={handlePix}>
            ALTERAR PARA PIX
          </ButtonCustom>
        </S.WrapperButtons>
      </S.Content>
    </S.Container>
  );
};
