import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useLicense } from "./useLicense";
import { removerCaracteresEspeciais } from "../../../utils/masks";

export const LicenseTemplate = () => {
  const { form, setForm, handleSubmit } = useLicense();

  return (
    <S.Container>
      <Title>Buscar Veículo</Title>
      <Text>
        Digite o <span className="textStrong">chassi</span> do veículo para
        consultar os dados.
      </Text>

      <S.form onSubmit={handleSubmit}>
        <Input
          label="Chassi"
          required
          value={form.Chassi}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              Chassi: removerCaracteresEspeciais(e.target.value),
            }));
          }}
        />
        <Button>Buscar</Button>
      </S.form>
    </S.Container>
  );
};
