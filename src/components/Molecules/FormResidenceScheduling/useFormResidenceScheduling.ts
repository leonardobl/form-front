import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { useForm } from "react-hook-form";
import { Delivery } from "../../../services/Delivery";
import { toast } from "react-toastify";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { z } from "zod";
import { Controller } from "react-hook-form";

const schema = z.object({
  uuidDelivery: z.string().min(1, "Você precisa selecionar uma cidade"),
});

export const useFormResidenceScheduling = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAgendamentoCadastroForm>({
    defaultValues: {
      uuidDelivery: "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    Delivery.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.uuid,
          label: item.cidade,
          element: item,
        }));

        setCidadesOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, []);

  return { cidadesOptions, Controller, control, handleSubmit, errors };
};
