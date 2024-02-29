import React, { useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Usuario } from "../../../services/Usuario";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IFormForgotProps {
  email: string;
}

export const useForgotPassword = () => {
  const [form, setForm] = useState<IFormForgotProps>({} as IFormForgotProps);
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    Usuario.getByEmail({ email: form.email })
      .then(({ data }) => {
        Usuario.requererNovaSenha({
          cpfCnpj: data.cpfCnpj,
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
          );
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

  return { handleSubmit, form, setForm };
};
