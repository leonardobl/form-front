import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useDelivery } from "./useDeliveryAgente";

export const DeliveryTemplate = () => {
  const { cidadesOptions, localOptions, form, setForm, handleSubmit } =
    useDelivery();

  return (
    <S.Container>
      <Title>Delivery</Title>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <SimpleSelect options={cidadesOptions} label="Cidade" required />
        </div>
        <div>
          <SimpleSelect
            options={localOptions}
            label="Local de Atendimento"
            required
          />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
