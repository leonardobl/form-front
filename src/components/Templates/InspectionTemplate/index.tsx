import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { useInspectionTemplate } from "./useInspectionTemplate";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCnpj, maskCpf, maskMoney, maskPhone } from "../../../utils/masks";
import { TipoPagamento } from "../../../enums/tipoPagamento";

export const InspectionTemplate = () => {
  const { agendamento, handleDownload, isMobile } = useInspectionTemplate();

  return (
    <S.Container>
      <S.Form>
        <S.FormHeader>
          <Text>Dados do agendamento.</Text>
          {isMobile ? (
            <img
              src="/assets/svgs/down-doc.svg"
              alt="icone download"
              onClick={handleDownload}
            />
          ) : (
            <S.ButtonDown onClick={handleDownload}>
              <img src="/assets/svgs/icon-down.svg" alt="" />
              Download
            </S.ButtonDown>
          )}
        </S.FormHeader>

        <div>
          <Input
            label="Tipo de Agendamento"
            readOnly
            value={agendamento?.tipoAtendimento}
          />
        </div>

        <div>
          <Input
            label="Data do Agendamento"
            readOnly
            value={reverseToBrDate(agendamento?.diaAgendado)}
          />
        </div>
        <div>
          <Input
            label="Horário do Agendamento"
            readOnly
            value={agendamento?.horaAgendada}
          />
        </div>
        <div>
          <Input label="Cliente" readOnly value={agendamento?.cliente?.nome} />
        </div>
        <div>
          <Input
            label="CPF/CNPJ"
            readOnly
            value={
              agendamento?.cliente?.cpfCnpj?.length > 14
                ? maskCnpj(agendamento?.cliente?.cpfCnpj)
                : maskCpf(agendamento?.cliente?.cpfCnpj)
            }
          />
        </div>
        <div>
          <Input
            label="Telefone"
            readOnly
            value={maskPhone(agendamento?.cliente?.telefone)}
          />
        </div>
        <div>
          <Input label="E-mail" readOnly value={agendamento?.cliente?.email} />
        </div>
        <div>
          <Input
            label="Modelo do carro"
            readOnly
            value={agendamento?.veiculo?.modelo}
          />
        </div>
        <div>
          <Input label="Placa" readOnly value={agendamento?.veiculo?.placa} />
        </div>
        <div>
          <Input
            label="Renavam"
            readOnly
            value={agendamento?.veiculo?.renavam}
          />
        </div>
        <div>
          <Input label="Chassi" readOnly value={agendamento?.veiculo?.chassi} />
        </div>
        <div>
          <Input
            label="Valor Pago"
            readOnly
            value={maskMoney(agendamento?.fatura?.valorTotal / 100)}
          />
        </div>
        <div>
          <Input
            label="Forma de Pagamento"
            readOnly
            value={
              agendamento?.fatura?.pix
                ? TipoPagamento.PIX
                : TipoPagamento.BOLETO
            }
          />
        </div>
      </S.Form>

      <S.Info>
        <p>
          No <b>dia e hora marcados</b>, é só levar seu veículo até a
          ECV/CIRETRAN. <b>Não se esqueça de levar o documento em mãos!</b> Um
          de nossos atendentes irá te receber e te orientar sobre os próximos
          passos.
        </p>
      </S.Info>
    </S.Container>
  );
};
