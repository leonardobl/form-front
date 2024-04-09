import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { useConfirmAppointment } from "./useConfirmAppointment";
import { maskCnpj, maskCpf, maskMoney } from "../../../utils/masks";

export const ConfirmAppointmentTemplate = () => {
  const { agendamento } = useConfirmAppointment();

  return (
    <S.Container>
      <S.WrapperText>
        <Text>
          Confirme os{" "}
          <span className="textStrong">dados do seu agendamento</span>.
        </Text>
        <img src="/assets/svgs/down-doc.svg" alt="icone download" />
      </S.WrapperText>
      <S.Form>
        <div>
          <Input
            value={agendamento?.veiculo?.tipo || " --- "}
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
            value={agendamento?.cliente?.telefone || " --- "}
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
            value={maskMoney(agendamento?.servico?.valorPadrao)}
            readOnly
            label="Valor Pago"
          />
        </div>

        <div>
          <Input readOnly label="Forma de Pagamento" />
        </div>
      </S.Form>
    </S.Container>
  );
};
