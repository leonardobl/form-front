import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useAddressRegistration } from "./useAddressRegistration";
import { ISelectOptions } from "../../../types/inputs";
import { maskCep } from "../../../utils/masks";

export const AddressRegistrationTemplate = () => {
  const {
    form,
    setForm,
    cidadesOptions,
    handleCep,
    handlePhone,
    handleSubmit,
    isDisabled,
    ufOptions,
  } = useAddressRegistration();

  return (
    <S.Container>
      <Title>Endereço de Realização do Serviço</Title>

      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <Input
              required
              label="Nome"
              value={form.nome}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              required
              value={form.telefone}
              maxLength={15}
              label="Telefone"
              onChange={(e) => handlePhone(e.target.value)}
            />
          </div>

          <div>
            <Input
              required
              maxLength={9}
              onBlur={handleCep}
              value={form?.endereco?.cep}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: {
                    ...prev.endereco,
                    cep: maskCep(e.target.value),
                  },
                }))
              }
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
            <Button disabled={isDisabled}>Cadastrar Serviço</Button>
          </div>
        </S.GridWrapper>
      </S.Form>
    </S.Container>
  );
};
