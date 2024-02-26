import React, { useEffect, useState } from "react";
import {
  IConsultaUnionProps,
  IConsultaVeiculoPlacaForm,
} from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useSurvey = () => {
  const { setIsLoad } = useContextSite();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const params = useParams();

  const [form, setForm] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IConsultaVeiculoPlacaForm = {
      Placa: form.Placa,
      CnpjECV: null,
      IdCidadeDetran: null,
      Renavam: form.Renavam,
      uuidAgendamento: agendamentoSession?.uuidAgendamento,
    };

    Veiculo.postByPlaca(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidVeiculo: data.uuid,
        });
        navigate(`/agendamento/${params.uuidAgendamento}/servicos/veiculo`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem, { autoClose: 4000 })
      )
      .finally(() => setIsLoad(false));
  }

  return { form, setForm, handleSubmit };
};
