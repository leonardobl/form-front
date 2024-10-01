import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { Button } from "../../Atoms/Button";
import { usePix } from "./usePix";
import { maskMoney } from "../../../utils/masks";
import { useNavigate, useParams } from "react-router-dom";

export const PixTemplate = () => {
  const { agendamento, pagamento } = usePix();
  const navigate = useNavigate();
  const params = useParams();

  function acessarFatura() {
    navigate(`/agendamento/${agendamento?.uuid}/fatura`);
  }

  return (
    <S.Container>
      <Title>Pagamento PIX</Title>
      <Text>
        Efetue o pagamento com o <span className="textStrong">QR CODE</span>{" "}
        gerado abaixo. Caso esteja no celular copie o{" "}
        <span className="textStrong">PIX</span>. abra o app do banco de sua
        escolha e cole na área destinada ao “
        <span className="textStrong">PIX Copia e Cola</span>”.
      </Text>

      <S.Info>
        <p>
          <span>*</span>Seu agendamento só será realizado após a confirmação do
          pagamento.
        </p>
      </S.Info>

      <S.GridWrapper>
        <div>
          <S.ImgQr src={pagamento?.pix?.qrcode} alt="qrcode" />
        </div>
        <div>
          <p>Valor: {maskMoney(pagamento?.valorTotal / 100)}</p>
        </div>

        <div>
          <PaymentCodContainer value={pagamento?.pix?.qrcodeText} />
        </div>

        <div>
          <Button onClick={acessarFatura}>VER FATURA</Button>
        </div>
        {/* <div>
          <Button
            onClick={() =>
              navigate(
                `/agendamento/${params.uuidAgendamento}/pagamento/boleto`
              )
            }
          >
            ALTERAR PARA BOLETO
          </Button>
        </div> */}
      </S.GridWrapper>
    </S.Container>
  );
};
