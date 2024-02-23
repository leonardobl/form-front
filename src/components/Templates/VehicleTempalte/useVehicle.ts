import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Agendamento,
  IPutAgendamentoProps,
} from "../../../services/Agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { IVeiculoDTO } from "../../../types/agendamento";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useVehicle = () => {
  const { isLoad, setIsLoad } = useContextSite();
  const [form, setForm] = useState<IVeiculoDTO>({} as IVeiculoDTO);
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    Agendamento.getById({ uuid: agendamentoSession?.uuidAgendamento })
      .then(({ data }) => {
        const PAYLOAD: IPutAgendamentoProps = {
          uuid: agendamentoSession?.uuidAgendamento,
          diaAgendado: data.diaAgendado,
          horaAgendada: data.horaAgendada,
          tipoAtendimento: TipoAtendimentoEnum[data.tipoAtendimento],
          codigoPagamento: data.codigoPagamento,
          dataPagamento: data.dataPagamento,
          dataRealizacao: data.dataRealizacao,
          primeiroAgendamento: data.primeiroAgendamento,
          revistoria: data.revistoria,
          status: StatusAgendamentoEnum[data.status],
          uuidCliente: agendamentoSession?.uuidCliente,
          uuidDelivery: data?.delivery?.uuid,
          uuidLoja: data?.loja?.uuid,
          uuidServico: data?.servico?.uuid,
          uuidVeiculo: agendamentoSession?.uuidVeiculo,
        };

        Agendamento.put(PAYLOAD)
          .then(() => {
            if (PAYLOAD.revistoria) {
              setAgendamentoSession({
                ...agendamentoSession,
                revistoria: true,
                uuidAgendamento: PAYLOAD.uuid,
              });
            }

            if (
              agendamentoSession?.tipoAtendimento === TipoAtendimentoEnum.LOJA
            ) {
              if (PAYLOAD.revistoria) {
                navigate(`/meus-agendamentos/agendamento?id=${PAYLOAD.uuid}`);
                return;
              }

              navigate(`/pagamento`);
              return;
            }

            navigate("/servicos/cadastro-endereco");
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
    if (!agendamentoSession?.uuidVeiculo) return;

    setIsLoad(true);

    Veiculo.byId({ uuid: agendamentoSession?.uuidVeiculo })
      .then(({ data }) => {
        setForm(data);
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
  }, [agendamentoSession?.uuidVeiculo]);

  return { handleSubmit, isLoad, form };
};
