import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useResidence } from "./useResidence";
import { ISelectOptions } from "../../../types/inputs";
import { Title } from "../../Atoms/Title";

export const ResidenceTemplate = () => {
  const { cidadesOptions, form, setForm, handleSubmit } = useResidence();

  return (
    <S.Container>
      <Title className="title">Domicílio</Title>
      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <SimpleSelect
              required
              label="Cidade"
              options={cidadesOptions}
              placeholder={"Selecione a uma das nossas unidades"}
              value={cidadesOptions.find(
                (item) => item.value === form.uuidDelivery
              )}
              onChange={(e: ISelectOptions) => {
                setForm((prev) => ({ ...prev, uuidDelivery: e?.value }));
              }}
            />
          </div>

          <div>
            <Button>Avançar</Button>
          </div>
        </S.GridWrapper>
      </S.Form>
    </S.Container>
  );
};
