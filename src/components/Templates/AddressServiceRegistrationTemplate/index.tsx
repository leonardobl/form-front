import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useAddressServiceRegistration } from "./useAddressServiceRegistration";

export const AddressServiceRegistrationTemplate = () => {
  const { maskPhone, handleSubmit, selectOptions } =
    useAddressServiceRegistration();

  return (
    <S.Container>
      <Title>Endereço de Realização do Serviço</Title>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <Input label="Nome" required />
        </div>
        <div>
          <Input
            label="Telefone"
            maxLength={15}
            required
            onChange={(e) => {
              maskPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <SimpleSelect
            label="Concessionária"
            required
            options={selectOptions}
          />
        </div>

        <div>
          <Button>Cadastrar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
