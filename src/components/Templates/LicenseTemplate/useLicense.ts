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

export const useLicense = () => {
  const { setIsLoad } = useContextSite();
  const [form, setForm] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );
  const params = useParams();

  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IConsultaVeiculoChassiForm = {
      Chassi: form?.Chassi as string,
      CnpjECV: null,
      IdCidadeDetran: null,
      uuidAgendamento: agendamentoSession?.uuidAgendamento,
    };

    Veiculo.postByChassi(PAYLOAD)
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
        }) => toast.error(mensagem, { autoClose: 3000 })
      )
      .finally(() => setIsLoad(false));
  }

  return { form, setForm, handleSubmit };
};
