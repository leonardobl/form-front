import React, { useEffect, useState } from "react";
import {
  IConsultaUnionProps,
  IConsultaVeiculoPlacaForm,
} from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

export const useSurvey = () => {
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();

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
      uuidAgendamento: agendamentoContext?.uuidAgendamento,
    };

    Veiculo.postByPlaca(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoContext({
          ...agendamentoContext,
          uuidVeiculo: data.uuid,
        });
        navigate(`/servicos/veiculo`);
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

  useEffect(() => {
    console.log(agendamentoContext);
  }, [agendamentoContext]);

  return { form, setForm, handleSubmit };
};
