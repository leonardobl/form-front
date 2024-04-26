import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

export const useFormStoreScheduling = () => {
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [clienteSession] = useSessionStorage("cliente");

  const schemaAgendamento = z.object({
    uuidDelivery: z
      .string()
      .min(1, "Você precisa selecionar uma cidade")
      .optional(),
    uuidLoja: z.string().min(1, "Você precisa selecionar uma loja").optional(),
  });

  const {
    register,
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
    Loja.get()
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

  function submitAgendamento(data: IAgendamentoCadastroForm) {
    console.log(data);

    return;

    setIsLoad(true);

    Agendamento.postV2(data)
      .then(({ data }) => {
        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: clienteSession?.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          });
        }

        navigate(`/agendamento/${data.uuid}/login-cadastro`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  return {
    lojasOptions,
    errors,
    control,
    Controller,
    handleSubmit,
    submitAgendamento,
  };
};
