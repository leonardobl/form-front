import { useForm, Controller } from "react-hook-form";
import { IFeriadoForm } from "../../../types/feriado";
import { TipoFeriadoEnum } from "../../../enums/tipoFeriado";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Capitalize } from "../../../utils/capitalize";
import { useCallback, useEffect, useState } from "react";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { Feriado } from "../../../services/Feriado";

const schema = z.object({
  cidade: z.string().optional(),
  dia: z.string().min(1),
  tipo: z.string().min(1),
  uf: z.string().optional(),
});

const TipoOptions = Object.values(TipoFeriadoEnum).map((t) => ({
  value: t,
  label: Capitalize(t),
}));

export const useHolidaysRegister = () => {
  const [ufs, setUfs] = useState<ISelectOptions[]>([] as ISelectOptions[]);
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [data, setData] = useState<Date | null>(null);
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  const { control, handleSubmit, watch, setValue, resetField } =
    useForm<IFeriadoForm>({
      defaultValues: {
        cidade: "",
        dia: "",
        tipo: "" as TipoFeriadoEnum,
        uf: "",
      },
      resolver: zodResolver(schema),
    });

  const getUfs = useCallback(() => {
    Ibge.UFs().then(({ data }) => {
      const options = data.map((_) => ({
        value: _.sigla,
        label: _.sigla,
        element: _,
      }));

      setUfs(options);
    });
  }, []);

  async function getCidades() {
    Ibge.CidadesPorEstado({ sigla: watch("uf") })
      .then(({ data }) => {
        const options = data.map((c) => ({
          value: c.nome,
          label: c.nome,
          element: c,
        }));

        setCidades(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }

  useEffect(() => {
    if (watch("uf")) {
      setValue("cidade", "");
      getCidades();
    }
  }, [watch("uf")]);

  useEffect(() => {
    getUfs();
  }, []);

  useEffect(() => {
    if (watch("tipo") === TipoFeriadoEnum.ESTADUAL) {
      resetField("cidade");
    }

    if (watch("tipo") === TipoFeriadoEnum.NACIONAL) {
      resetField("cidade");
      resetField("uf");
    }
  }, [watch("tipo")]);

  function submitForm(data: IFeriadoForm) {
    setIsLoad(true);
    Feriado.cadastrar(data)
      .then(() => {
        toast.success("Feriado cadastrado com sucesso!");
        setTimeout(() => {
          navigate("/configuracoes/feriados");
        }, 1500);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }

  return {
    Controller,
    control,
    handleSubmit,
    watch,
    TipoOptions,
    ufs,
    cidades,
    data,
    setData,
    submitForm,
  };
};
