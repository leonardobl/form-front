import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../../../services/Cliente";
import { useContextSite } from "../../../context/Context";
import { IClienteDTO } from "../../../types/cliente";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { IPagination } from "../../../types/pagination";
import { useMediaQuery } from "react-responsive";
import { resetValues } from "../../../utils/resetObject";
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
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [numberPage, setNumberPage] = useState(0);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const size = 5;

  function getConcessionarias(props?: IFormProps) {
    setIsLoad(true);
    Cliente.getConcessionarias({ ...props, size })
      .then(({ data }) => {
        setData(data?.content);

        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
      })
      .catch()
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    getConcessionarias({ ...form, page: numberPage });
  }, [numberPage]);

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

  function handleClean() {
    const reset = resetValues(form);
    setForm(reset);
    getConcessionarias();
  }

  function handleFilter() {
    const hasValue = Object.values(form).some((item) => item);
    if (hasValue) {
      getConcessionarias(form);
    }
  }

  useEffect(() => {
    getCidades();
    getConcessionarias();
  }, []);

  return {
    handleClean,
    handleFilter,
    navigate,
    data,
    cidadesOptions,
    form,
    setForm,
    numberPage,
    setNumberPage,
    pagination,
    isMobile,
  };
};
