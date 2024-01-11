import React, { useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";

import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

import { jwtDecode } from "jwt-decode";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Autenticacao } from "../../../services/Autenticacao";
import { useContextSite } from "../../../context/Context";
import { maskCpf, removeDigitos } from "../../../utils/masks";

import { Cliente } from "../../../services/Cliente";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";

export const LoginTemplate = () => {
  const [token, setToken] = useSessionStorage("@token");
  const [clienteSession, setClienteSession] = useSessionStorage("cliente");
  const [usuarioSession, setUsuarioSession] = useSessionStorage("usuario");
  const [form, setForm] = useState<IAutenticacaoForm>({} as IAutenticacaoForm);
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const { isLoad, setIsLoad } = useContextSite();
  const [isDisable, setIsDisable] = useState(false);

  function handleCpf(e: string) {
    const newCpfValue = maskCpf(e);
    setForm((prev) => ({ ...prev, cpfCNPJ: newCpfValue }));
  }

  async function login(e: React.SyntheticEvent) {
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

        decoded?.uuid &&
          Cliente.getByUsuario({ uuidUsuario: decoded.uuid })
            .then(({ data }) => {
              setClienteSession(data.uuid);
              setUsuarioSession(decoded.uuid);

              toast.success("Login efetuado com sucesso");

              setTimeout(() => {
                setIsDisable(false);
                if (agendamento) {
                  return window.open("/servicos", "_self");
                }

                return window.open("/agendamento", "_self");
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

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={login}>
          <S.Header>
            <h1>Entrar</h1>
          </S.Header>
          <S.FormContent>
            <S.Grid $gridTemplate="1fr">
              <label>CPF/CNPJ</label>
              <InputCustom
                value={form?.cpfCNPJ}
                maxLength={14}
                onChange={(e) => {
                  handleCpf(e.target.value);
                }}
                required
                // value={form.email}
                // onChange={(e) =>
                //   setForm((prev) => ({ ...prev, email: e.target.value }))
                // }
              />
            </S.Grid>

            <S.Grid $gridTemplate="1fr">
              <label>Senha</label>
              <InputCustom
                type="password"
                required
                value={form.senha}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, senha: e.target.value }))
                }
              />
              {/* <a href="#">Esqueceu a senha?</a> */}
            </S.Grid>

            <S.WrapperButton>
              <ButtonCustom typeOfButton="Login" disabled={isDisable}>
                Login
              </ButtonCustom>
            </S.WrapperButton>
          </S.FormContent>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
