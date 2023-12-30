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

  function login(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    Autenticacao.post(form)
      .then(({ data }) => console.log(data))
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => setIsLoad(false));

    // setToken(v4());
    // setTimeout(() => {
    //   if (atendimentoSession) {
    //     return window.open("/opcoes-servicos", "_self");
    //   }

    //   return window.open("/agendamento", "_self");
    // }, 3000);
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
              <ButtonCustom typeOfButton="Login">Login</ButtonCustom>
            </S.WrapperButton>
          </S.FormContent>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
