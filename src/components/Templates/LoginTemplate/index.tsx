import React, { useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";

import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Autenticacao } from "../../../services/Autenticacao";
import { useContextSite } from "../../../context/Context";

export const LoginTemplate = () => {
  const [token, setToken] = useSessionStorage("@token");
  const [form, setForm] = useState<IAutenticacaoForm>({} as IAutenticacaoForm);
  const [atendimentoSession, setAtendimentoSession] =
    useSessionStorage("tipoAtendimento");
  const { isLoad, setIsLoad } = useContextSite();
  const [isDisable, setIsDisable] = useState(false);

  function login(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);
    setIsDisable(true);

    Autenticacao.post(form)
      .then(({ data }) => {
        setToken(data.token);

        toast.success("Login efetuado com sucesso");
        setTimeout(() => {
          setIsDisable(false);
          if (atendimentoSession) {
            return window.open("/opcoes-servicos", "_self");
          }

          return window.open("/agendamento", "_self");
        }, 3000);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
          setIsDisable(false);
        }
      )
      .finally(() => setIsLoad(false));
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
              <label>E-mail</label>
              <InputCustom
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
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
