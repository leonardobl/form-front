import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { removeDigitos } from "../../../utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";
import { RolesEnum } from "../../../enums/roles";
import { Cliente } from "../../../services/Cliente";
import { useContextSite } from "../../../context/Context";
import { Autenticacao } from "../../../services/Autenticacao";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate, useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";

export const useLogin = () => {
  const { setIsLoad } = useContextSite();
  const [token, setToken] = useSessionStorage("@token");
  const params = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useSessionStorage("cliente");

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

        const is_cliente = decoded?.perfis?.some(
          (perfil) =>
            perfil === RolesEnum.ROLE_CLIENTE
        );

        if (!is_cliente) {
          toast.success("Login efetuado com sucesso");
          setUsuario({
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
              setUsuario({
                uuidUsuario: decoded.uuid,
                uuidCliente: data.uuid,
                roles: decoded.perfis,
                tipo: data.tipo,
              });

              toast.success("Login efetuado com sucesso");

              setTimeout(() => {
                if (params?.uuidAgendamento) {
                  Agendamento.vincularAgendamentoAoCliente({
                    uuidAgendamento: params?.uuidAgendamento,
                    uuidCliente: data.uuid,
                  })
                    .then(() => {
                      navigate(
                        `/agendamento/${params.uuidAgendamento}/servicos`
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
                localStorage.removeItem("@token");
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

  useEffect(() => {
    if (token) {
      localStorage.clear();
    }
  }, []);

  return {
    onSubmitForm,
  };
};
