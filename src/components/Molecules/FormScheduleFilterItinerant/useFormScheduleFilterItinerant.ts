import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Itinerante } from "../../../services/Itinerante";
import { useForm, Controller } from "react-hook-form";
import { IItineranteListProps } from "../../../types/itinerante";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  cidade: z.string().optional(),
  dataRealizacao: z.string().optional(),
});

export const useFormScheduleFilterItinerant = () => {
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const { control, handleSubmit, reset } = useForm<IItineranteListProps>({
    defaultValues: {
      cidade: "",
      dataRealizacao: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const getDeliverys = useCallback(() => {
    Itinerante.list().then(({ data }) => {
      const cidadesOptionsUnicas = [
        ...new Set(data.content.map((i) => i.endereco.cidade)),
      ].map((_) => ({ value: _, label: _ }));

      setCidades(cidadesOptionsUnicas);
    });
  }, []);

  useEffect(() => {
    getDeliverys();
  }, []);

  return {
    Controller,
    control,
    handleSubmit,
    reset,
    cidades,
  };
};
