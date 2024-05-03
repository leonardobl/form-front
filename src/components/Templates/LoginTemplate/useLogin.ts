import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { maskCnpj, maskCpf, removeDigitos } from "../../../utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";
import { RolesEnum } from "../../../enums/roles";
import { Cliente } from "../../../services/Cliente";
import { useContextSite } from "../../../context/Context";
import { Autenticacao } from "../../../services/Autenticacao";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate, useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  cpfCNPJ: z.string().min(14, "CPF/CNPJ invalido"),
  senha: z.string().min(1, "Campo obrigatorio"),
});

export const useLogin = () => {
  const { setIsLoad } = useContextSite();
  const [token, setToken] = useSessionStorage("@token");
  const params = useParams();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("cliente");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IAutenticacaoForm>({
    mode: "onChange",
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

  async function onSubmitForm(data: IAutenticacaoForm) {
    setIsLoad(true);

    const PAYLOAD: IAutenticacaoForm = {
      cpfCNPJ: removeDigitos(data.cpfCNPJ),
      senha: data.senha,
    };

    await Autenticacao.post(PAYLOAD)
      .then(({ data }) => {
        setToken(data.token);
        return data.token;
      })
      .then((token) => {
        const decoded = jwtDecode<IDecodedToken>(token);

        const is_high_level = decoded?.perfis?.some(
          (perfil) =>
            perfil === RolesEnum.ROLE_ADMIN ||
            perfil === RolesEnum.ROLE_GERENTE ||
            perfil === RolesEnum.ROLE_COLABORADOR ||
            perfil === RolesEnum.ROLE_SUPORTE
        );

        if (is_high_level) {
          toast.success("Login efetuado com sucesso");
          setAgendamentoSession({
            uuidUsuario: decoded.uuid,
            usuarioCpfCnpj: decoded.sub,
            roles: decoded.perfis,
          });
          setTimeout(() => {
            navigate("/meus-agendamentos");
          }, 2000);
          return;
        }

        decoded?.uuid &&
          Cliente.getByUsuario({ uuidUsuario: decoded.uuid })
            .then(({ data }) => {
              setAgendamentoSession({
                uuidUsuario: decoded.uuid,
                uuidCliente: data.uuid,
                roles: decoded.perfis,
              });

              toast.success("Login efetuado com sucesso");

              setTimeout(() => {
                if (params?.uuidAgendamento) {
                  Agendamento.vincularAgendamentoAoCliente({
                    uuidAgendamento: params?.uuidAgendamento,
                    uuidCliente: data.uuid,
                  })
                    .then(() => {
                      // navigate(
                      //   `/agendamento/${params.uuidAgendamento}/servicos`
                      // );
                      navigate("/meus-agendamentos");
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
                  return;
                }

                navigate("/meus-agendamentos");
              }, 2000);
            })
            .catch(
              ({
                response: {
                  data: { mensagem },
                },
              }) => {
                toast.error(mensagem);
                sessionStorage.removeItem("@token");
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

  return {
    navigate,
    handleSubmit,
    register,
    errors,
    onSubmitForm,
  };
};
