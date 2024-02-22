import React, { useState } from "react";
import {
  IConsultaUnionProps,
  IConsultaVeiculoPlacaForm,
} from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

export const useSurvey = () => {
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();

  const [form, setForm] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );

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
        window.open(`/servicos/veiculo`, "_self");
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
