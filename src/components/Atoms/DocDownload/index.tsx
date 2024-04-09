import React from "react";
import * as S from "./styles";
import { maskCnpj, maskCpf, maskMoney, maskPhone } from "../../../utils/masks";
import { TipoPagamento } from "../../../enums/tipoPagamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useDocDownload } from "./useDocDownload";

export const DocDownloads = () => {
  const { agendamento } = useDocDownload();

  return (
    <S.Container id="container">
      <S.Bar>
        <img
          src={`/assets/svgs/logo-${process.env.REACT_APP_PROJECT}.png`}
          alt="logo empresa"
        />
      </S.Bar>
      <S.WrapperContent>
        <S.Card>
          <S.CardTitle>Cliente</S.CardTitle>
          <S.CardContent>
            <p>
              Nome: <span>{agendamento?.cliente?.nome || " --- "}</span>
            </p>

            <p>
              CPF/CNPJ:{" "}
              <span>
                {agendamento?.cliente?.cpfCnpj?.length > 14
                  ? maskCnpj(agendamento?.cliente?.cpfCnpj)
                  : maskCpf(agendamento?.cliente?.cpfCnpj)}
              </span>
            </p>

            <p>
              Telefone:{" "}
              <span>
                {maskPhone(agendamento?.cliente?.telefone) || " --- "}
              </span>
            </p>

            <p>
              E-mail: <span>{agendamento?.cliente?.email || " --- "}</span>
            </p>
          </S.CardContent>
        </S.Card>

        <S.Card>
          <S.CardTitle>Informações do Agendamento</S.CardTitle>
          <S.CardContent>
            <p>
              Dia Agendado: <span>{agendamento?.diaAgendado || " --- "}</span>
            </p>

            <p>
              Horário Agendado:{" "}
              <span>{agendamento?.horaAgendada || " --- "}</span>
            </p>

            <p>
              Local de Atendimento:{" "}
              <span>
                {agendamento?.loja?.uuid
                  ? `${agendamento?.loja?.endereco?.logradouro}, ${agendamento?.loja?.endereco?.bairro}, ${agendamento?.loja?.endereco?.cidade}`
                  : `${agendamento?.atendimentoDomiciliar?.endereco?.logradouro}, ${agendamento?.atendimentoDomiciliar?.endereco?.bairro}, ${agendamento?.atendimentoDomiciliar?.endereco?.cidade}`}
              </span>
            </p>
          </S.CardContent>
        </S.Card>

        <S.Card>
          <S.CardTitle>Veículo</S.CardTitle>
          <S.CardContent>
            <p>
              Modelo: <span>{agendamento?.veiculo?.modelo || " --- "}</span>
            </p>

            <p>
              Placa: <span>{agendamento?.veiculo?.placa || " --- "}</span>
            </p>

            <p>
              Ano do Veículo:{" "}
              <span>{agendamento?.veiculo?.ano || " --- "}</span>
            </p>
          </S.CardContent>
        </S.Card>

        <S.Card>
          <S.CardTitle>Pagamento</S.CardTitle>
          <S.CardContent>
            <p>
              Serviço: <span>{agendamento?.servico?.nome || " --- "}</span>
            </p>

            <p>
              Valor:{" "}
              <span>
                {agendamento?.tipoAtendimento === TipoAtendimentoEnum.DOMICILIO
                  ? maskMoney(agendamento?.servico?.valorDelivery / 100)
                  : maskMoney(agendamento?.servico?.valorPadrao / 100)}
              </span>
            </p>

            <p>
              Forma de Pagamento:{" "}
              <span>
                {agendamento?.fatura?.pix
                  ? TipoPagamento.PIX
                  : TipoPagamento.BOLETO}
              </span>
            </p>
          </S.CardContent>
        </S.Card>
      </S.WrapperContent>
    </S.Container>
  );
};
