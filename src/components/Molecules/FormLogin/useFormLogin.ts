import React, { useEffect } from "react";
import { IAutenticacaoForm } from "../../../types/autenticacao";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { maskCnpj, maskCpf } from "../../../utils/masks";
import { z } from "zod";

const schema = z.object({
  cpfCNPJ: z.string().min(1, "Campo obrigatorio").min(14, "CPF/CNPJ invalido"),
  senha: z.string().min(1, "Campo obrigatorio"),
});

export const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IAutenticacaoForm>({
    mode: "onSubmit",
    defaultValues: {
      cpfCNPJ: "",
      senha: "",
    },
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    let newValue = "";

    if (watch("cpfCNPJ")?.length > 14) {
      newValue = maskCnpj(watch("cpfCNPJ")) as string;
      setValue("cpfCNPJ", newValue);

      return;
    }
    newValue = maskCpf(watch("cpfCNPJ")) as string;
    setValue("cpfCNPJ", newValue);
  }, [watch("cpfCNPJ")]);

  return {
    register,
    handleSubmit,
    errors,
    navigate,
  };
};
