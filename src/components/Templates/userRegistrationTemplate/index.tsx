import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";

import { Button } from "../../Atoms/Button";
import { useUserRegistration } from "./useUserRegistration";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";

export const UserRegistrationTemplate = () => {
  const {
    form,
    setForm,
    handleCpf,
    handlePhone,
    handleCep,
    cidadesOptions,
    ufOptions,
    cepLoad,
    checkPass,
    handleSubmit,
    inpConfirSenha,
    inpSenhaRef,
  } = useUserRegistration();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>CADASTRO</Title>
        <S.Form onSubmit={handleSubmit}>
          <div>
            <Input
              label="Nome Completo"
              required
              value={form?.nome}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              label="E-mail"
              type="email"
              value={form?.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              label="Telefone"
              value={form?.telefone}
              maxLength={15}
              onChange={(e) => handlePhone(e.target.value)}
            />
          </div>

          <div>
            <Input
              label="CPF/CNPJ"
              required
              value={form?.cpfCnpj}
              onChange={(e) => handleCpf(e.target.value)}
              maxLength={18}
            />
          </div>

          <div>
            <Input
              label="CEP"
              required
              maxLength={9}
              value={form?.endereco?.cep}
              onChange={(e) => handleCep(e.target.value)}
            />
          </div>

          <div>
            <Input
              label="Endereço (Rua)"
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
          </div>

          <div>
            <Input
              label="Número"
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
          </div>

          <div>
            <Input
              label="Complemento"
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
            <Input
              label="Bairro"
              required
              value={form?.endereco?.bairro}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: { ...prev.endereco, bairro: e.target.value },
                }))
              }
            />
          </div>

          <div>
            <SimpleSelect
              label="UF"
              required
              key={`${Math.random()} - ${cepLoad}`}
              value={ufOptions.find((_) => _.value === form?.endereco?.uf)}
              options={ufOptions}
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
              required
              key={`${Math.random()} - ${cepLoad}`}
              value={cidadesOptions.find(
                (_) => _.value === form?.endereco?.cidade
              )}
              options={cidadesOptions}
              onChange={(e: ISelectOptions) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: {
                    ...prev.endereco,
                    cidade: e?.value,
                  },
                }))
              }
            />
          </div>

          <div>
            <Input
              label="Senha"
              required
              type="password"
              value={form?.senha}
              ref={inpSenhaRef}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, senha: e.target.value }));
                checkPass && checkPass();
              }}
            />
          </div>

          <div>
            <Input
              type="password"
              label="Confirmar Senha"
              required
              ref={inpConfirSenha}
              onChange={(e) => checkPass && checkPass()}
            />
          </div>

          <div>
            <Button>Cadastrar</Button>
          </div>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
