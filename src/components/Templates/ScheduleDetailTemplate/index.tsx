import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { ButtonOptions } from "../../Atoms/ButtonOptions";
import { useScheduleDetail } from "./useScheduleDetail";
import { Input } from "../../Atoms/Inputs/Input";
import { removeUnderscore } from "../../../utils/removeUnderscore";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCnpj, maskCpf, maskMoney } from "../../../utils/masks";

export const ScheduleDetailTemplate = () => {
  const {
    confirmarPagamento,
    acessarFatura,
    agendamento,
    menuDisabled,
    cancelarAgendamento,
  } = useScheduleDetail();

  return (
    <S.Container>
      <S.Wrapper>
        <Title>Dados do Agendamento</Title>

        <S.WrapperText>
          <Text>
            Esses são os{" "}
            <span className="textStrong">dados do seu agendamento</span>.
          </Text>

          <ButtonOptions
            handleConfirmPayment={confirmarPagamento}
            handlePix={acessarFatura}
            handleTicket={acessarFatura}
            // status={agendamento?.status}
            disabled={menuDisabled}
            // tipoAtendimento={agendamento?.tipoAtendimento}
            // uuidAgendamento={agendamento?.uuid}
            onCancel={cancelarAgendamento}
            agendamento={agendamento}
          />
        </S.WrapperText>

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
              label="Telefone"
              readOnly
              value={agendamento?.cliente?.telefone || "---"}
            />
          </div>
          <div>
            <Input
              label="E-mail"
              readOnly
              value={agendamento?.cliente?.email || "---"}
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
          <div>
            <Input
              label="Serviço"
              readOnly
              value={agendamento?.servico?.nome || "---"}
            />
          </div>
          <div>
            <Input
              label="Valor do serviço"
              readOnly
              value={maskMoney(agendamento?.fatura?.valorTotal / 100) || "---"}
            />
          </div>
          <div>
            <Input
              label="Local de realização da vistoria"
              readOnly
              value={
                agendamento?.loja?.endereco
                  ? `${agendamento?.loja?.endereco?.logradouro} - ${agendamento?.loja?.endereco?.bairro}, ${agendamento?.loja?.endereco?.cidade} - ${agendamento?.loja?.endereco?.uf}`
                  : agendamento?.atendimentoDomiciliar?.endereco
                  ? `${
                      agendamento?.atendimentoDomiciliar?.endereco?.logradouro
                    }, ${
                      agendamento?.atendimentoDomiciliar?.endereco?.numero
                        ? `${agendamento?.atendimentoDomiciliar?.endereco?.numero},`
                        : ""
                    } ${
                      agendamento?.atendimentoDomiciliar?.endereco?.complemento
                        ? `${agendamento?.atendimentoDomiciliar?.endereco?.complemento}`
                        : ""
                    } - ${
                      agendamento?.atendimentoDomiciliar?.endereco?.bairro
                    }, ${
                      agendamento?.atendimentoDomiciliar?.endereco?.cidade
                    }/${agendamento?.atendimentoDomiciliar?.endereco?.uf}`
                  : "---"
              }
            />
          </div>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};
