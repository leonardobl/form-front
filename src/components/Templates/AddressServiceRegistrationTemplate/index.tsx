import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useAddressServiceRegistration } from "./useAddressServiceRegistration";
import { ISelectOptions } from "../../../types/inputs";

export const AddressServiceRegistrationTemplate = () => {
  const { maskPhone, handleSubmit, selectOptions, form, setForm } =
    useAddressServiceRegistration();

  return (
    <S.Container>
      <Title>Endereço de Realização do Serviço</Title>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Nome"
            required
            value={form?.nome}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, nome: e?.target?.value }))
            }
          />
        </div>
        <div>
          <Input
            label="Telefone"
            maxLength={15}
            required
            value={form?.telefone}
            onChange={(e) => {
              setForm((prev) => ({
                ...prev,
                telefone: maskPhone(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <SimpleSelect
            label="Concessionária"
            required
            options={selectOptions}
            value={selectOptions.find(
              (item) => item.value === form?.uuidConcessionaria
            )}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({ ...prev, uuidConcessionaria: e?.value }))
            }
          />
        </div>

        <div>
          <Button>Cadastrar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
