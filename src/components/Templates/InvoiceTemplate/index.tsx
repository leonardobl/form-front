import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCnpj, maskCpf, maskMoney } from "../../../utils/masks";
import { removeUnderscore } from "../../../utils/removeUnderscore";
import { Input } from "../../Atoms/Inputs/Input";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { Title } from "../../Atoms/Title";
import * as S from "./styles";
import { useInvoiceDetail } from "./useInvoiceDetail";

export const InvoiceTemplate = () => {
    const {
      agendamento,
    } = useInvoiceDetail();
  
    return (
      <S.Container>
        <S.Wrapper>
          <Title>Dados do Agendamento</Title>
  
          <S.Form>
            <div>
              <Input
                label="Status"
                readOnly
                value={removeUnderscore(agendamento?.status)}
              />
            </div>
  
            <div>
              <Input
                label="Data"
                readOnly
                value={reverseToBrDate(agendamento?.diaAgendado)}
              />
            </div>
  
            <div>
              <Input label="Horário" readOnly value={agendamento?.horaAgendada} />
            </div>
  
            <div>
              <Input
                label="Cliente"
                readOnly
                value={agendamento?.cliente?.nome || "---"}
              />
            </div>
            <div>
              <Input
                label="CPF/CNPJ"
                readOnly
                value={
                  agendamento?.cliente?.cpfCnpj?.length > 11
                    ? maskCnpj(agendamento?.cliente?.cpfCnpj)
                    : maskCpf(agendamento?.cliente?.cpfCnpj)
                }
              />
            </div>
            <div>
              <Input
                label="Modelo do carro"
                readOnly
                value={agendamento?.veiculo?.modelo || "---"}
              />
            </div>
            <div>
              <Input
                label="Placa"
                readOnly
                value={agendamento?.veiculo?.placa || "---"}
              />
            </div>
            <div>
              <Input
                label="Renavam"
                readOnly
                value={agendamento?.veiculo?.renavam || "---"}
              />
            </div>
            <div>
              <Input
                label="Chassi"
                readOnly
                value={agendamento?.veiculo?.chassi || "---"}
              />
            </div>
            </S.Form>
            <Title>Dados para Pagamento</Title>

            <S.Info>
                <p>
                <span>*</span>Seu agendamento só será realizado após a confirmação do
                pagamento.
                </p>
            </S.Info>

            <S.GridWrapper>
                <div>
                <S.ImgQr src={agendamento?.fatura?.pix?.qrcode} alt="qrcode" />
                </div>
                <div>
                <p>Valor: {maskMoney(agendamento?.fatura?.valorTotal / 100)}</p>
                </div>

                <div>
                <PaymentCodContainer value={agendamento?.fatura?.pix?.qrcodeText} />
                </div>
                </S.GridWrapper>   
        </S.Wrapper>
      </S.Container>
    );
  };
  