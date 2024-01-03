import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";
import { maskCep, maskPhone } from "../../../utils/masks";
import { ViaCep } from "../../../services/ViaCep";
import { useContextSite } from "../../../context/Context";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

import { ISelectOptions } from "../../../types/inputs";

import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Ibge } from "../../../services/Ibge";
import { LayoutTemplate } from "../LayoutTemplate";
import { IAtendimentoDomiciliarForm } from "../../../types/agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Agendamento } from "../../../services/Agendamento";

export const ServiceAddressRegistrationTemplate = () => {
  const [form, setForm] = useState<IAtendimentoDomiciliarForm>(
    {} as IAtendimentoDomiciliarForm
  );
  const { setIsLoad } = useContextSite();
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  // const inpSenhaRef = useRef<HTMLInputElement>(null);
  // const inpConfirSenha = useRef<HTMLInputElement>(null);

  // function checkPass() {
  //   const pass = inpSenhaRef.current.value;
  //   const confirm = inpConfirSenha.current.value;

  //   if (pass !== confirm) {
  //     inpConfirSenha.current.setCustomValidity("As senhas não conferem");
  //     return;
  //   }

  //   inpConfirSenha.current.setCustomValidity("");
  // }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD = { ...form, uuid: agendamento?.uuid };

    Agendamento.putAddress(PAYLOAD)
      .then(() => {
        toast.success("Endereco cadastrado com sucesso!");
        setTimeout(() => {
          window.open("/pagamento", "_self");
        }, 3000);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  function handlePhone(e: string) {
    const newPhoneValue = maskPhone(e);
    setForm((prev) => ({ ...prev, telefone: newPhoneValue }));
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
              <h1>Endereço de Realização do Serviço</h1>
            </S.Header>
            <S.WrapperContentForm>
              <S.Grid $gridTemplate="2fr 1fr" $gap="0 24px">
                <label>
                  Nome <span>*</span>
                </label>
                <label>
                  Telefone <span>*</span>
                </label>

                <InputCustom
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                />

                <InputCustom
                  required
                  value={form.telefone}
                  maxLength={15}
                  onChange={(e) => handlePhone(e.target.value)}
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

              {/* <S.Grid $gridTemplate="1fr 1fr" $gap="0 24px">
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
                  ref={inpConfirSenha}
                  type="password"
                  required
                  onChange={checkPass}
                />
              </S.Grid> */}

              <S.WrapperButton>
                <ButtonCustom typeOfButton="Login">
                  Cadastrar Serviço
                </ButtonCustom>
              </S.WrapperButton>
            </S.WrapperContentForm>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
