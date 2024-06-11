import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  IAgendamentoDTO,
  IIniciarAgendamentoProps,
} from "../../../types/agendamento";
import { Agendamento } from "../../../services/Agendamento";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { IColaboradorCompletoDTO } from "../../../types/colaborador";
import { Colaborador } from "../../../services/Colaborador";

export const useAcceptInspection = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [vistoria, setVistoria] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const { setIsLoad } = useContextSite();

  const [colaboradorAtual, setColaboradorAtual] =
    useState<IColaboradorCompletoDTO>({} as IColaboradorCompletoDTO);

  const getColaboradorAtual = useCallback(() => {
    Colaborador.atual()
      .then(({ data }) => {
        setColaboradorAtual(data);
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
  }, []);

  useEffect(() => {
    getColaboradorAtual();
  }, [getColaboradorAtual]);

  useEffect(() => {
    if (id) {
      setIsLoad(true);
      Agendamento.getById({ uuid: id })
        .then(({ data }) => setVistoria(data))
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => {
          setIsLoad(false);
        });
    }
  }, [id]);

  function atribuirAgendamento(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IIniciarAgendamentoProps = {
      uuid: vistoria?.uuid,
      uuidVistoriador: colaboradorAtual.uuid,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);

    Agendamento.atribuir(PAYLOAD)
      .then(() => {
        toast.success("Aceite realizado com sucesso!");
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

  return { vistoria, atribuirAgendamento };
};
