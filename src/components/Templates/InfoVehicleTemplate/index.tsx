import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { Button } from "../../Atoms/Button";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";

import { IVeiculoDTO, IVeiculoForm } from "../../../types/veiculo";
import {
  Agendamento,
  IPutAgendamentoProps,
} from "../../../services/Agendamento";
import { IAgendamentoForm } from "../../../types/agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

export const InfoVehicleTemplate = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const [cliente, setCliente] = useSessionStorage("cliente");
  const [tipoAgendamento, setTipoAgendamento] =
    useSessionStorage("tipoAtendimento");
  const [veiculoSession, setVeiculoSession] = useSessionStorage("veiculo");
  const [sessionRevistoria, setSessionRevistoria] =
    useSessionStorage("revistoria");

  const { isLoad, setIsLoad } = useContextSite();
  const [veiculo, setVeiculo] = useState<IVeiculoDTO>({} as IVeiculoDTO);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    Agendamento.getById({ uuid: agendamento?.uuid })
      .then(({ data }) => {
        const PAYLOAD: IPutAgendamentoProps = {
          uuid: agendamento?.uuid,
          diaAgendado: data.diaAgendado,
          horaAgendada: data.horaAgendada,
          tipoAtendimento: TipoAtendimentoEnum[data.tipoAtendimento],
          codigoPagamento: data.codigoPagamento,
          dataPagamento: data.dataPagamento,
          dataRealizacao: data.dataRealizacao,
          primeiroAgendamento: data.primeiroAgendamento,
          revistoria: data.revistoria,
          status: StatusAgendamentoEnum[data.status],
          uuidCliente: cliente?.uuid,
          uuidDelivery: data?.delivery?.uuid,
          uuidLoja: data?.loja?.uuid,
          uuidServico: data?.servico?.uuid,
          uuidVeiculo: veiculoSession,
        };

        Agendamento.put(PAYLOAD)
          .then(() => {
            if (tipoAgendamento === "LOJA") {
              if (PAYLOAD.revistoria) {
                setSessionRevistoria(true);
                window.open("/meus-agendamentos/detalhe-agendamento", "_self");
                return;
              }
              window.open(`/pagamento`, "_self");
              return;
            }

            window.open("/cadastro-endereco", "_self");
          })
          .catch(
            ({
              response: {
                data: { mensagem },
              },
            }) => {
              toast.error(mensagem);
            }
          );
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  useEffect(() => {
    if (!veiculoSession) return;

    setIsLoad(true);

    Veiculo.byId({ uuid: veiculoSession })
      .then(({ data }) => {
        setVeiculo(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }, [veiculoSession]);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <h1>Informações do veículo</h1>
          <S.Form onSubmit={handleSubmit}>
            <S.FirstGrid>
              <div>
                <S.TitleItemGrid>Modelo do carro</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.modelo} />
              </div>
              <div>
                <S.TitleItemGrid>Ano</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.ano} />
              </div>
              <div>
                <S.TitleItemGrid>Placa</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.placa} />
              </div>
            </S.FirstGrid>
            <S.SecondGrid>
              <div>
                <S.TitleItemGrid>Chassi</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.chassi} />
              </div>
              <div>
                <S.TitleItemGrid>Renavam</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.renavam} />
              </div>
              <div>
                <S.TitleItemGrid>Tipo de veículo</S.TitleItemGrid>
                <InputCustom readOnly value={veiculo?.tipo} />
              </div>
            </S.SecondGrid>
            <S.WrapperBtn>
              <Button disabled={isLoad}>Confirmar</Button>
            </S.WrapperBtn>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
