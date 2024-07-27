import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Ibge } from "../../../services/Ibge";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { IFeriadoListProps } from "../../../types/feriado";
import { zodResolver } from "@hookform/resolvers/zod";
import { TipoFeriadoEnum } from "../../../enums/tipoFeriado";
import { toast } from "react-toastify";
import { Capitalize } from "../../../utils/capitalize";

const schema = z.object({
  tipo: z.string().optional(),
  cidade: z.string().optional(),
  uf: z.string().optional(),
  dia: z.string().optional(),
});

const TipoOptions = Object.values(TipoFeriadoEnum).map((t) => ({
  value: t,
  label: Capitalize(t),
}));

export const useFormFilterHolidays = () => {
  const [ufs, setUfs] = useState<ISelectOptions[]>([] as ISelectOptions[]);
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [data, setData] = useState<Date | null>(null);

  const { watch, control, handleSubmit, setValue, reset } =
    useForm<IFeriadoListProps>({
      defaultValues: {
        cidade: "",
        dia: "",
        tipo: "" as TipoFeriadoEnum,
        uf: "",
      },

      resolver: zodResolver(schema),
      mode: "all",
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

  return {
    ufs,
    Controller,
    cidades,
    watch,
    control,
    handleSubmit,
    data,
    setData,
    TipoOptions,
    reset,
  };
};
