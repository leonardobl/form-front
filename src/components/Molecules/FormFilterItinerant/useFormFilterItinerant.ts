import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { useForm, Controller } from "react-hook-form";
import { IItineranteListProps } from "../../../types/itinerante";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Delivery } from "../../../services/Delivery";
import { Municipio } from "../../../services/Municipio";

const schema = z.object({
  cidade: z.string().optional(),
  dataRealizacao: z.string().optional(),
  uuidDelivery: z.string().optional(),
});

export const useFormFilterItinerant = () => {
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const [unidades, setUnidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [date, setDate] = useState<Date | null>(null);

  const { control, handleSubmit, reset } = useForm<IItineranteListProps>({
    defaultValues: {
      cidade: "",
      dataRealizacao: "",
      uuidDelivery: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const getDeliverys = useCallback(() => {
    Delivery.get().then(({ data }) => {
      const options = data.content.map((i) => ({
        label: i.cidade,
        value: i.uuid,
        element: i,
      }));

      setUnidades(options);
    });
  }, []);

  const getCidades = useCallback(() => {
    Municipio.get({ size: 200 }).then(({ data }) => {
      const options = data.content.map((i) => ({
        label: i.nome,
        value: i.nome,
        element: i,
      }));

      setCidades(options);
    });
  }, []);

  useEffect(() => {
    getDeliverys();
    getCidades();
  }, []);

  return {
    unidades,
    Controller,
    control,
    handleSubmit,
    reset,
    date,
    setDate,
    cidades,
  };
};
