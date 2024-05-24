import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { LocalAtendimentoEnum } from "../../../enums/localAtendimento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

type FormDeliveryProps = {
  uuidDelivery: string;
  local: string;
};

export const useDelivery = () => {
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const localOptions = Object.entries(LocalAtendimentoEnum).map((item) => ({
    value: item[0],
    label: item[1],
  }));
  const [form, setForm] = useState<FormDeliveryProps>({} as FormDeliveryProps);
  const { setIsLoad } = useContextSite();

  const getCidades = useCallback(() => {
    Delivery.get().then(({ data }) => {
      const options = data.content.map((item) => ({
        label: item.cidade,
        value: item.uuid,
        element: item,
      }));

      setCidadesOptions(options);
    });
  }, []);

  useEffect(() => {
    getCidades();
  }, []);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    const PAYLOAD: IAgendamentoCadastroForm = {
      concessionaria: !!(form.local === "CONCESSIONARIA"),
      uuidDelivery: form.uuidDelivery,
    };

    Agendamento.postV2(PAYLOAD)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidAgendamento: data.uuid,
          cidade: data?.delivery?.cidade,
        });

        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: agendamentoSession?.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          });
        }

        navigate(`/agendamento/${data.uuid}/login-cadastro`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  return { cidadesOptions, localOptions, handleSubmit, form, setForm };
};
