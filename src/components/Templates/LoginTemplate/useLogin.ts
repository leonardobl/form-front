import React, { useState } from "react";
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

export const useLogin = () => {
  const [form, setForm] = useState<IAutenticacaoForm>({} as IAutenticacaoForm);
  const { isLoad, setIsLoad } = useContextSite();
  const [isDisable, setIsDisable] = useState(false);
  const [token, setToken] = useSessionStorage("@token");
  const params = useParams();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  const navigate = useNavigate();

  function handleCpf(e: string) {
    let newValue = "";

    if (e.length > 14) {
      newValue = maskCnpj(e) as string;
      setForm((prev) => ({ ...prev, cpfCNPJ: newValue }));

      return;
    }
    newValue = maskCpf(e) as string;
    setForm((prev) => ({ ...prev, cpfCNPJ: newValue }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);
    setIsDisable(true);

    const PAYLOAD: IAutenticacaoForm = {
      cpfCNPJ: removeDigitos(form.cpfCNPJ),
      senha: form.senha,
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
            perfil === RolesEnum.ROLE_ADMIN || perfil === RolesEnum.ROLE_GERENTE
        );

        if (is_high_level) {
          toast.success("Login efetuado com sucesso");
          setAgendamentoSession({
            ...agendamentoSession,
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
                ...agendamentoSession,
                uuidUsuario: decoded.uuid,
                uuidCliente: data.uuid,
                roles: decoded.perfis,
              });

              toast.success("Login efetuado com sucesso");

              setTimeout(() => {
                setIsDisable(false);

                if (params?.uuidAgendamento) {
                  console.log("aqui");
                  Agendamento.vincularAgendamentoAoCliente({
                    uuidAgendamento: params?.uuidAgendamento,
                    uuidCliente: data.uuid,
                  })
                    .then(() => {
                      navigate(
                        `/agendamento/${params.uuidAgendamento}/servicos`
                      );
                      return;
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
                }

                navigate("/meus-agendamentos");
                return;
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
        setIsDisable(false);
      });
  }

  return {
    form,
    setForm,
    handleCpf,
    isDisable,
    isLoad,
    navigate,
    handleSubmit,
  };
};
