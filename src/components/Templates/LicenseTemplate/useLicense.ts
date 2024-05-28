import React, { useState } from "react";
import {
  IConsultaUnionProps,
  IConsultaVeiculoChassiForm,
} from "../../../types/veiculo";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

interface RouteParams extends Record<string, string> {
  uuidAgendamento: string;
}

export const useLicense = () => {
  const { setIsLoad } = useContextSite();
  const [form, setForm] = useState<IConsultaUnionProps>({} as IConsultaUnionProps);
  const navigate = useNavigate();
  const { uuidAgendamento } = useParams<RouteParams>();
  const [agendamentoSession, setAgendamentoSession] = useSessionStorage("agendamentoSession");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IConsultaVeiculoChassiForm = {
      Chassi: form?.Chassi as string,
      CnpjECV: null,
      IdCidadeDetran: null,
      uuidAgendamento: uuidAgendamento,
    };

    Veiculo.postByChassi(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidVeiculo: data.uuid
        });
        
        navigate(`/agendamento/${uuidAgendamento}/servicos/veiculo`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem, { autoClose: 3000 })
      )
      .finally(() => setIsLoad(false));
  }

  return { form, setForm, handleSubmit };
};
