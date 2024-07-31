import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Loja } from "../../../services/Lojas";
import { Itinerante } from "../../../services/Itinerante";
import { useForm, Controller } from "react-hook-form";
import { IItineranteListProps } from "../../../types/itinerante";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    Itinerante.list().then(({ data }) => {
      const unidadesUnicas = [
        ...new Set(
          data.content.map((i) =>
            JSON.stringify({
              unidade: i.delivery.cidade,
              uuid: i.delivery.uuid,
            })
          )
        ),
      ];

      const unidadesOptions = unidadesUnicas
        .map((i) => JSON.parse(i))
        .map((e) => ({ value: e.uuid, label: e.unidade }));

      const cidadesOptionsUnicas = [
        ...new Set(data.content.map((i) => i.endereco.cidade)),
      ].map((_) => ({ value: _, label: _ }));

      setCidades(cidadesOptionsUnicas);
      setUnidades(unidadesOptions);
    });
  }, []);

  useEffect(() => {
    getDeliverys();
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
