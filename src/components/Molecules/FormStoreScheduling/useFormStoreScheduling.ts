import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";

export const useFormStoreScheduling = () => {
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);

  const schemaAgendamento = z.object({
    uuidLoja: z.string().min(1, "Você precisa selecionar uma loja"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAgendamentoCadastroForm>({
    defaultValues: {
      uuidLoja: "",
    },
    resolver: zodResolver(schemaAgendamento),
    reValidateMode: "onSubmit",
  });

  useEffect(() => {
    Loja.get({ativo: true})
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          label: item.nome,
          value: item.uuid,
          element: item,
        }));

        setLojasOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, []);

  return {
    lojasOptions,
    errors,
    control,
    Controller,
    handleSubmit,
  };
};
