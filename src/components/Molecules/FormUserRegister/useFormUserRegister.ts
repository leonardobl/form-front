import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IClienteForm } from "../../../types/cliente";
import { TipoClienteEnum } from "../../../enums/tipoCliente";
import { ISelectOptions } from "../../../types/inputs";
import { Ibge } from "../../../services/Ibge";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";
import { maskCep, maskCnpj, maskCpf, maskPhone } from "../../../utils/masks";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface IIClienteFormProps extends IClienteForm {
  confirmSenha: string;
}

const enderecoSchema = z.object({
  bairro: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  cep: z.string({ message: "Campo obrigatorio" }).min(9, "Cep invalido"),
  cidade: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  complemento: z.string().optional(),
  logradouro: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  numero: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  uf: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

const schema = z
  .object({
    cpfCnpj: z
      .string({ message: "Campo obrigatorio" })
      .min(14, "CPF/CNPJ invalido"),
    email: z.string({ message: "Campo obrigatorio" }).email("Email invalido"),
    nome: z
      .string({ message: "Campo obrigatorio" })
      .min(12, "Por favor preencha o nome completo"),
    senha: z
      .string({ message: "Campo obrigatorio" })
      .min(6, "Minimo de 6 caracteres"),
    confirmSenha: z
      .string({ message: "Campo obrigatorio" })
      .min(6, "Minimo de 6 caracteres"),
    telefone: z
      .string({ message: "Campo obrigatorio" })
      .min(14, "Telefone invalido")
      .optional()
      .or(z.literal("")),
    tipo: z.string().optional(),
    endereco: enderecoSchema,
  })
  .refine(({ confirmSenha, senha }) => confirmSenha === senha, {
    path: ["confirmSenha"],
    message: "As senhas não coferem",
  });

export const useFormUserRegister = () => {
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);

  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<IIClienteFormProps>({
    defaultValues: {
      cpfCnpj: "",
      email: "",
      nome: "",
      senha: "",
      confirmSenha: "",
      telefone: "",
      tipo: TipoClienteEnum.PARTICULAR,
      uuid: "",
      endereco: {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        logradouro: "",
        numero: "",
        uf: "",
        uuid: "",
      },
    },
    mode: "onChange",
    criteriaMode: "firstError",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  function handleCep() {
    if (watch("endereco.cep").length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(watch("endereco.cep"))
          .then(({ data }) => {
            setValue("endereco.logradouro", data.logradouro);
            setValue("endereco.bairro", data.bairro);
            setValue("endereco.cidade", data.localidade);
            setValue("endereco.uf", data.uf);
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    if (watch("endereco.uf")) {
      Ibge.CidadesPorEstado({ sigla: watch("endereco.uf") })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
        })
        .catch((erro) => toast.error("Erro ao requisitar as cidades"));
    }
  }, [watch("endereco.uf")]);

  useEffect(() => {
    setValue("endereco.cep", maskCep(watch("endereco.cep")));
  }, [watch("endereco.cep")]);

  useEffect(() => {
    let newvalue = "";

    if (watch("cpfCnpj")?.length > 14) {
      newvalue = maskCnpj(watch("cpfCnpj"));
      setValue("cpfCnpj", newvalue);
      return;
    }

    newvalue = maskCpf(watch("cpfCnpj"));
    setValue("cpfCnpj", newvalue);
  }, [watch("cpfCnpj")]);

  useEffect(() => {
    const newPhoneValue = maskPhone(watch("telefone"));
    setValue("telefone", newPhoneValue);
  }, [watch("telefone")]);

  return {
    handleSubmit,
    ufOptions,
    cidadesOptions,
    handleCep,
    Controller,
    control,
    register,
    errors,
  };
};
