import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useSurvey } from "./useSurvey";
import { removerCaracteresEspeciais } from "../../../utils/masks";

export const SurveyTempalte = () => {
  const { form, handleSubmit, setForm } = useSurvey();

  return (
    <S.Container>
      <Title>Buscar Veículo</Title>
      <Text>
        Digite a <span className="textStrong">placa</span> e{" "}
        <span className="textStrong">renavam</span> do veículo para consultar os
        dados.
      </Text>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <Input
            required
            label="Placa"
            value={form.Placa}
            onChange={(e) => {
              setForm((prev) => ({
                ...prev,
                Placa: removerCaracteresEspeciais(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <Input
            required
            label="Renavam"
            type="number"
            value={form.Renavam}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, Renavam: e.target.value }))
            }
          />
        </div>
        <div>
          <Button>Buscar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
