import React, { useRef, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Usuario } from "../../../services/Usuario";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: INovaSenhaForm = {
      senha: form.senha,
      codigo,
      cpfCnpj,
    };

    Usuario.alterarSenha(PAYLOAD)
      .then(() => {
        toast.success("Senha alterada com sucesso!");
        setTimeout(() => {
          navigate("/agendamento/login");
        }, 2000);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setIsLoad(false);
      });
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
