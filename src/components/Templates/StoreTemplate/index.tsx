import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useStore } from "./useStore";
import { ISelectOptions } from "../../../types/inputs";
import { Title } from "../../Atoms/Title";

export const StoreTemplate = () => {
  const { lojasOptions, form, setForm, handleSubmit } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>
      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <SimpleSelect
              required
              label="Loja"
              options={lojasOptions}
              placeholder={"Selecione a uma das nossas unidades"}
              value={lojasOptions?.find((item) => item.value === form.uuidLoja)}
              onChange={(e: ISelectOptions) => {
                setForm((prev) => ({ ...prev, uuidLoja: e?.value }));
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
