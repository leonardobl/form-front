import React, { useRef, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Usuario } from "../../../services/Usuario";
import { useParams, useSearchParams } from "react-router-dom";
import { INovaSenhaForm } from "../../../types/usuario";
import { toast } from "react-toastify";

interface IResetPassProps {
  senha: string;
}

export const useResetPassword = () => {
  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<IResetPassProps>({} as IResetPassProps);
  const { setIsLoad } = useContextSite();
  const [params, setParams] = useSearchParams();
  const codigo = params.get("codigo");
  const cpfCnpj = params.get("cpfcnpj");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    // setIsLoad(true);

    const PAYLOAD: INovaSenhaForm = {
      senha: form.senha,
      codigo,
      cpfCnpj,
    };

    window.opener = null;
    window.open("", "_self");
    window.close();

    // Usuario.alterarSenha(PAYLOAD).then(() => {
    //   toast()
    // } )
  }

  //mapa.starcheck.com.br/alterar-senha?cpfcnpj=12345678910&codigo=D1F2G3

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
