import React, { useRef, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Usuario } from "../../../services/Usuario";
import { useParams } from "react-router-dom";
import { INovaSenhaForm } from "../../../types/usuario";

interface IResetPassProps {
  senha: string;
}

export const useResetPassword = () => {
  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<IResetPassProps>({} as IResetPassProps);
  const { setIsLoad } = useContextSite();
  const params = useParams();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: INovaSenhaForm = {
      senha: form.senha,
      codigo: "",
      cpfCnpj: "",
    };

    // Usuario.alterarSenha(PAYLOAD);
  }

  function checkPass() {
    const pass = inpSenhaRef?.current?.value;
    const confirm = inpConfirSenha?.current?.value;

    if (pass !== confirm) {
      inpConfirSenha.current.setCustomValidity("As senhas não conferem");
      return;
    }
    inpConfirSenha?.current?.setCustomValidity("");
  }

  return {
    handleSubmit,
    inpSenhaRef,
    inpConfirSenha,
    checkPass,
    form,
    setForm,
  };
};
