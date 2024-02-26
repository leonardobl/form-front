import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { Button } from "../../Atoms/Button";
import { useTicket } from "./useTicket";
import { maskMoney } from "../../../utils/masks";
import { useNavigate, useParams } from "react-router-dom";

export const TicketTemplate = () => {
  const { pagamento } = useTicket();
  const params = useParams();
  const navigate = useNavigate();

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
          <S.BarCodeImg
            src={pagamento?.boleto?.barCode}
            alt="codigo de barras"
          />
        </div>
        <div>
          <p>Valor: {maskMoney(pagamento?.valorTotal / 100)}</p>
        </div>
        <div>
          <PaymentCodContainer value={pagamento?.boleto?.barCodeData} />
        </div>

        <div>
          <Button>VER FATURA</Button>
        </div>

        <div>
          <Button
            onClick={() =>
              navigate(`/agendamento/${params.uuidAgendamento}/pagamento/pix`)
            }
          >
            ALTERAR PARA PIX
          </Button>
        </div>
      </S.GridWrapper>
    </S.Container>
  );
};
