import React, { useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Usuario } from "../../../services/Usuario";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { maskCnpj, maskCpf } from "../../../utils/masks";

interface IFormForgotProps {
  cpfCnpj: string;
}

export const useForgotPassword = () => {
  const [form, setForm] = useState<IFormForgotProps>({} as IFormForgotProps);
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleCpf(e: string) {
    let newvalue = "";

    if (e?.length > 14) {
      newvalue = maskCnpj(e);
      setForm((prev) => ({ cpfCnpj: newvalue }));
      return;
    }

    newvalue = maskCpf(e);
    setForm((prev) => ({ cpfCnpj: newvalue }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    Usuario.requererNovaSenha({
      cpfCnpj: form.cpfCnpj,
    })
    .then(() => {
      toast.success("Email enviado com sucesso!");
      setTimeout(() => {
        navigate("/agendamento/login");
      }, 2500);
    })
    .catch(
      ({
        response: {
          data: { mensagem },
        },
      }) => {
        toast.error(mensagem);
      }
    )
    .finally(() => {
      setIsLoad(false);
    });
  }

  return { handleSubmit, form, handleCpf };
};
