import React, { useEffect, useRef, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles.ts";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";
import { maskCep, maskCpf, maskPhone } from "../../../utils/masks";
import { ViaCep } from "../../../services/ViaCep";
import { useContextSite } from "../../../context/Context";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";
import { IClienteForm } from "../../../types/cliente";
import { Cliente } from "../../../services/Cliente";
import { TipoClienteEnum } from "../../../enums/tipoCliente";

export const RegisterTemplate = () => {
  const [form, setForm] = useState<IClienteForm>({} as IClienteForm);
  const { setIsLoad } = useContextSite();
  const [isDisabled, setIsDisabled] = useState(false);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);

  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IClienteForm = { ...form, tipo: TipoClienteEnum.PARTICULAR };

    setIsLoad(true);
    setIsDisabled(true);

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");
        setTimeout(() => {
          window.open("/login", "_self");
        }, 3000);
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoad(false);
        setIsDisabled(false);
      });
  }

  function checkPass() {
    const pass = inpSenhaRef.current.value;
    const confirm = inpConfirSenha.current.value;

    if (pass !== confirm) {
      inpConfirSenha.current.setCustomValidity("As senhas não conferem");
      return;
    }

    inpConfirSenha.current.setCustomValidity("");
  }

  function handlePhone(e: string) {
    const newPhoneValue = maskPhone(e);
    setForm((prev) => ({ ...prev, telefone: newPhoneValue }));
  }

  function handleCpf(e: string) {
    const newCpfValue = maskCpf(e);
    setForm((prev) => ({ ...prev, cpfCnpj: newCpfValue }));
  }

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  function handleCep(e: string) {
    const newCepValue = maskCep(e);

    if (newCepValue.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(e)
          .then(({ data }) => {
            setForm((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.street,
                bairro: data.neighborhood,
                cidade: data.city,
                uf: data.state,
                cep: newCepValue,
              },
            }));
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);

      return;
    }

    setForm((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, cep: newCepValue },
    }));
  }

  useEffect(() => {
    if (form?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: form.endereco.uf })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
        })
        .catch((erro) => toast.error("Erro ao requisitar as cidades"));
    }
  }, [form?.endereco?.uf]);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.Form onSubmit={handleSubmit}>
            <S.Header>
              <h1>Cadastro de Acesso</h1>
            </S.Header>
            <S.WrapperContentForm>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Nome <span>*</span>
                </label>
                <InputCustom
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                />
              </S.Grid>
              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  CPF <span>*</span>
                </label>
                <label>
                  Telefone <span>*</span>
                </label>
                <InputCustom
                  required
                  value={form.cpfCnpj}
                  maxLength={14}
                  onChange={(e) => handleCpf(e.target.value)}
                />
                <InputCustom
                  placeholder="(00) 00000-0000"
                  required
                  value={form.telefone}
                  maxLength={15}
                  onChange={(e) => handlePhone(e.target.value)}
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr">
                <label>
                  E-mail <span>*</span>
                </label>
                <InputCustom
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  CEP <span>*</span>
                </label>

                <label>
                  Número <span>*</span>
                </label>
                <InputCustom
                  required
                  maxLength={9}
                  value={form?.endereco?.cep}
                  onChange={(e) => handleCep(e.target.value)}
                />

                <InputCustom
                  required
                  type="number"
                  value={form?.endereco?.numero}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        numero: e.target.value,
                      },
                    }))
                  }
                />
              </S.Grid>
              <S.Grid $gridTemplate="1fr">
                <label>
                  Endereço (Rua) <span>*</span>
                </label>
                <InputCustom
                  placeholder="Rua"
                  required
                  value={form?.endereco?.logradouro}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        logradouro: e.target.value,
                      },
                    }))
                  }
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Bairro <span>*</span>
                </label>
                <label>Complemento</label>
                <InputCustom
                  required
                  value={form?.endereco?.bairro}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: { ...prev.endereco, bairro: e.target.value },
                    }))
                  }
                />

                <InputCustom
                  value={form?.endereco?.complemento}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        complemento: e.target.value,
                      },
                    }))
                  }
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  UF <span>*</span>
                </label>
                <label>
                  Cidade <span>*</span>
                </label>

                <SimpleSelect
                  placeholder=""
                  options={ufOptions}
                  value={ufOptions.find(
                    (item) => item.value === form?.endereco?.uf
                  )}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: { ...prev.endereco, uf: e.value },
                    }))
                  }
                />

                <SimpleSelect
                  key={`${Math.random()}-${form?.endereco?.uf}`}
                  required
                  placeholder=""
                  value={cidadesOptions.find(
                    (item) => item.value === form?.endereco?.cidade
                  )}
                  options={cidadesOptions}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        cidade: e.value,
                      },
                    }))
                  }
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
                <label>
                  Senha <span>*</span>
                </label>
                <label>
                  Confirmar Senha <span>*</span>
                </label>
                <InputCustom
                  required
                  type="password"
                  value={form.senha}
                  ref={inpSenhaRef}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, senha: e.target.value }));
                    checkPass();
                  }}
                />
                <InputCustom
                  required
                  ref={inpConfirSenha}
                  type="password"
                  onChange={(e) => checkPass()}
                />
              </S.Grid>
              <S.WrapperButton>
                <ButtonCustom typeOfButton="Login" disabled={isDisabled}>
                  Criar Conta
                </ButtonCustom>
              </S.WrapperButton>
            </S.WrapperContentForm>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
