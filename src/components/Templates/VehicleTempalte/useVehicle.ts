import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { IAgendamentoDTO, IPutAgendamentoProps, IVeiculoDTO } from "../../../types/agendamento";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

interface RouteParams extends Record<string, string> {
  uuidAgendamento: string;
}

export const useVehicle = () => {
  const { isLoad, setIsLoad } = useContextSite();
  const [form, setForm] = useState<IVeiculoDTO>({} as IVeiculoDTO);
  const navigate = useNavigate();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>();
  const { uuidAgendamento } = useParams<RouteParams>();
  const [agendamentoSession, setAgendamentoSession] = useSessionStorage("agendamentoSession");

  useEffect(() => {
    setIsLoad(true);

    Agendamento.getById({uuid : uuidAgendamento})
    .then(({ data }) => {
      setAgendamento(data);
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
    .finally(() => setIsLoad(false));
  },[]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    const PAYLOAD: IPutAgendamentoProps = {
      uuid: agendamento?.uuid,
      diaAgendado: agendamento?.diaAgendado,
      horaAgendada: agendamento?.horaAgendada,
      tipoAtendimento: TipoAtendimentoEnum[agendamento?.tipoAtendimento],
      codigoPagamento: agendamento?.codigoPagamento,
      dataPagamento: agendamento?.dataPagamento,
      dataRealizacao: agendamento?.dataRealizacao,
      primeiroAgendamento: agendamento?.primeiroAgendamento,
      revistoria: agendamento?.revistoria,
      status: StatusAgendamentoEnum[agendamento?.status],
      uuidCliente: agendamento?.cliente?.uuid,
      uuidDelivery: agendamento?.delivery?.uuid,
      uuidLoja: agendamento?.loja?.uuid,
      uuidServico: agendamento?.servico?.uuid,
    };

    Agendamento.put(PAYLOAD)
    .then(() => {
      Agendamento.vincularAgendamentoAoVeiculo({
        uuidAgendamento: PAYLOAD.uuid,
        uuidVeiculo: agendamentoSession?.uuidVeiculo,
      })
        .then(({ data }) => {
          if (agendamento?.tipoAtendimento === TipoAtendimentoEnum.LOJA) {
            if (PAYLOAD.revistoria) {
              navigate(
                `/meus-agendamentos/agendamento?id=${PAYLOAD.uuid}`
              );
              return;
            }

            navigate(`/agendamento/${uuidAgendamento}/pagamento`);
            return;
          }

          if (data?.delivery?.uuid) {
            navigate(
              `/agendamento/${uuidAgendamento}/servicos/cadastro-endereco-servico`
            );

            return;
          }

          navigate(
            `/agendamento/${uuidAgendamento}/servicos/cadastro-endereco`
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
    .finally(() => setIsLoad(false));
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
