import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { useConfirmAppointment } from "./useConfirmAppointment";
import { maskCnpj, maskCpf, maskMoney, maskPhone } from "../../../utils/masks";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { TipoPagamento } from "../../../enums/tipoPagamento";

export const ConfirmAppointmentTemplate = () => {
  const { agendamento, handleDownload } = useConfirmAppointment();

  return (
    <S.Container>
      <S.WrapperText>
        <Text>
          Confirme os{" "}
          <span className="textStrong">dados do seu agendamento</span>.
        </Text>
        <img
          src="/assets/svgs/down-doc.svg"
          alt="icone download"
          onClick={handleDownload}
        />
      </S.WrapperText>
      <S.Form>
        <div>
          <Input
            value={agendamento?.tipoAtendimento || " --- "}
            readOnly
            label="Tipo de Agendamento"
          />
        </div>

        <div>
          <Input
            value={agendamento?.cliente?.nome || " --- "}
            readOnly
            label="Cliente"
          />
        </div>

        <div>
          <Input
            value={
              agendamento?.cliente?.cpfCnpj?.length > 14
                ? maskCnpj(agendamento?.cliente?.cpfCnpj)
                : maskCpf(agendamento?.cliente?.cpfCnpj)
            }
            readOnly
            label="CPF/CNPJ"
          />
        </div>

        <div>
          <Input
            value={maskPhone(agendamento?.cliente?.telefone) || " --- "}
            readOnly
            label="Telefone"
          />
        </div>

        <div>
          <Input
            value={agendamento?.cliente?.email || " --- "}
            readOnly
            label="E-mail"
          />
        </div>

        <div>
          <Input
            value={agendamento?.veiculo?.modelo || " --- "}
            readOnly
            label="Modelo do carro"
          />
        </div>

        <div>
          <Input
            value={agendamento?.veiculo?.placa || " --- "}
            readOnly
            label="Placa"
          />
        </div>

        <div>
          <Input
            value={agendamento?.veiculo?.renavam || " --- "}
            readOnly
            label="Renavam"
          />
        </div>

        <div>
          <Input
            value={agendamento?.veiculo?.chassi || " --- "}
            readOnly
            label="Chassi"
          />
        </div>

        <div>
          <Input
            value={
              agendamento?.tipoAtendimento === TipoAtendimentoEnum.DOMICILIO
                ? maskMoney(agendamento?.servico?.valorDelivery / 100)
                : maskMoney(agendamento?.servico?.valorPadrao / 100)
            }
            readOnly
            label="Valor Pago"
          />
        </div>

        <div>
          <Input
            value={
              agendamento?.fatura?.pix
                ? TipoPagamento.PIX
                : TipoPagamento.BOLETO
            }
            readOnly
            label="Forma de Pagamento"
          />
        </div>
      </S.Form>
    </S.Container>
  );
};
