import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { LocalAtendimentoEnum } from "../../../enums/localAtendimento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";

export const useDelivery = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const localOptions = Object.entries(LocalAtendimentoEnum).map((item) => ({
    value: item[0],
    label: item[1],
  }));
  const [form, setForm] = useState<IAgendamentoCadastroForm>(
    {} as IAgendamentoCadastroForm
  );
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

    Agendamento.postV2(form)
      .then(({ data }) => {})
      .catch(({ response: { data: mensagem } }) => {
        toast.error(mensagem);
      })
      .finally(() => setIsLoad(false));
  }

  return { cidadesOptions, localOptions, handleSubmit, form, setForm };
};
