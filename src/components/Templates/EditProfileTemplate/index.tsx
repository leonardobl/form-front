import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useProfile } from "./useProfile";
import { ISelectOptions } from "../../../types/inputs";

export const EditProfileTemplate = () => {
  const {
    checkPass,
    cidadesOptions,
    form,
    handleCep,
    handleCpf,
    handlePhone,
    inpConfirSenha,
    inpSenhaRef,
    setForm,
    ufOptions,
    isAdmGerente,
    isCliente,
  } = useProfile();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Meu perfil</Title>
        {isCliente ? (
          <S.FormClient>
            <S.GridClient>
              <div>
                <Input
                  label="Nome"
                  required
                  variant="edit"
                  value={form.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                />
              </div>
              <div>
                <Input
                  label="CPF/CNPJ"
                  required
                  variant="edit"
                  value={form.cpfCnpj}
                  maxLength={18}
                  onChange={(e) => handleCpf(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="E-mail"
                  variant="edit"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <Input
                  label="Telefone"
                  variant="edit"
                  value={form.telefone}
                  maxLength={15}
                  onChange={(e) => handlePhone(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="CEP"
                  required
                  variant="edit"
                  maxLength={9}
                  value={form?.endereco?.cep}
                  onChange={(e) => handleCep(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Endereço (Rua)"
                  required
                  variant="edit"
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
              </div>
              <div>
                <Input
                  label="Número"
                  required
                  variant="edit"
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
              </div>

              <div>
                <Input
                  label="Bairro"
                  required
                  variant="edit"
                  value={form?.endereco?.bairro}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        bairro: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  label="Complemento"
                  variant="edit"
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
              </div>

              <div>
                <SimpleSelect
                  label="UF"
                  placeholder=""
                  options={ufOptions}
                  value={ufOptions.find(
                    (item) => item.value === form?.endereco?.uf
                  )}
                  onChange={(e: ISelectOptions) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: { ...prev.endereco, uf: e.value },
                    }))
                  }
                />
              </div>
              <div>
                <SimpleSelect
                  label="Cidade"
                  key={`${Math.random()}-${form?.endereco?.uf}`}
                  required
                  placeholder=""
                  value={cidadesOptions.find(
                    (item) => item.value === form?.endereco?.cidade
                  )}
                  options={cidadesOptions}
                  onChange={(e: ISelectOptions) =>
                    setForm((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        cidade: e.value,
                      },
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  type="password"
                  label="Senha"
                  required
                  value={form.senha}
                  ref={inpSenhaRef}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, senha: e.target.value }));
                    checkPass();
                  }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  label="Confirmar Senha"
                  required
                  ref={inpConfirSenha}
                  onChange={(e) => checkPass()}
                />
              </div>
              <div>
                <Button>Salvar</Button>
              </div>
            </S.GridClient>
          </S.FormClient>
        ) : (
          <S.FormAdmin>
            <S.GridAdmin>
              <div>
                <Input
                  label="Nome"
                  required
                  variant="edit"
                  value={form.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                />
              </div>
              <div>
                <Input
                  label="CPF/CNPJ"
                  required
                  variant="edit"
                  value={form.cpfCnpj}
                  maxLength={18}
                  onChange={(e) => handleCpf(e.target.value)}
                />
              </div>

              <div>
                <Input
                  label="Telefone"
                  variant="edit"
                  value={form.telefone}
                  maxLength={15}
                  onChange={(e) => handlePhone(e.target.value)}
                />
              </div>

              <div>
                <Input
                  label="E-mail"
                  variant="edit"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div>
                <Button>Salvar</Button>
              </div>
            </S.GridAdmin>
          </S.FormAdmin>
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
