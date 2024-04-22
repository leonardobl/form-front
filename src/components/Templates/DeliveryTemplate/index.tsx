import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useDelivery } from "./useDeliveryAgente";
import { ISelectOptions } from "../../../types/inputs";

export const DeliveryTemplate = () => {
  const { cidadesOptions, localOptions, form, setForm, handleSubmit } =
    useDelivery();

  return (
    <S.Container>
      <Title>Delivery</Title>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <SimpleSelect
            options={cidadesOptions}
            label="Cidade"
            required
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({ ...prev, uuidDelivery: e?.value }))
            }
            value={cidadesOptions.find(
              (item) => item.value === form?.uuidDelivery
            )}
          />
        </div>
        <div>
          <SimpleSelect
            options={localOptions}
            value={localOptions.find((item) => item.value === form?.local)}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({ ...prev, local: e?.value }))
            }
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
