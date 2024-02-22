import React, { useState } from "react";
import {
  IConsultaUnionProps,
  IConsultaVeiculoChassiForm,
} from "../../../types/veiculo";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLicense = () => {
  const { setIsLoad, agendamentoContext, setAgendamentoContext } =
    useContextSite();
  const [form, setForm] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IConsultaVeiculoChassiForm = {
      Chassi: form?.Chassi as string,
      CnpjECV: null,
      IdCidadeDetran: null,
      uuidAgendamento: agendamentoContext?.uuidAgendamento,
    };

    Veiculo.postByChassi(PAYLOAD)

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
        }) => toast.error(mensagem, { autoClose: 3000 })
      )
      .finally(() => setIsLoad(false));
  }

  return { form, setForm, handleSubmit };
};
