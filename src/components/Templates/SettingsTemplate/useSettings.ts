import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../../../services/Cliente";
import { useContextSite } from "../../../context/Context";
import { IClienteDTO, IConcessionariaProps } from "../../../types/cliente";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { IPageRequest } from "../../../types/page";

interface IFormProps extends IPageRequest {
  nome?: string;
  cnpj?: string;
  cidade?: string;
}

export const useSettings = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IFormProps>({} as IFormProps);
  const [data, setData] = useState<IClienteDTO[]>([] as IClienteDTO[]);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  function getConcessionarias() {
    setIsLoad(true);
    Cliente.getConcessionarias()
      .then(({ data }) => {
        setData(data?.content);
      })
      .catch()
      .finally(() => setIsLoad(false));
  }

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
    getConcessionarias();
  }, []);

  return { navigate, data, cidadesOptions, form, setForm };
};
