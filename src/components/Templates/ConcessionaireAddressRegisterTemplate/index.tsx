import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";
import { maskPhone } from "../../../utils/masks";
import { Input } from "../../Atoms/Inputs/Input";
import { Text } from "../../Atoms/Text";
import { useConcessionaireAddressRegister } from "./useConcessionaireAddressRegister";
import { Button } from "../../Atoms/Button";

export const ConcessionaireAddressRegisterTemplate = () => {
  const { concessionarias, setForm, form, handleSubmit } =
    useConcessionaireAddressRegister();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.GridConcessionarieForm>
          <div>
            <Text>
              Preencha o formulário com o
              <span className="textStrong">
                endereço de realização do atendimento
              </span>
              .
            </Text>
          </div>
          <div>
            <Input
              label="Nome"
              required
              value={form?.nome}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              label="Telefone"
              required
              maxLength={15}
              value={maskPhone(form?.telefone)}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, telefone: e.target.value }))
              }
            />
          </div>
          <div>
            <SimpleSelect
              label="Concessionária"
              options={concessionarias}
              required
              value={
                concessionarias.find(
                  (i) => i.value === form?.uuidConcessionaria
                ) || null
              }
              onChange={(e: ISelectOptions) =>
                setForm((prev) => ({
                  ...prev,
                  uuidConcessionaria: e.value,
                }))
              }
            />
          </div>
          <div>
            <Button>Cadastrar</Button>
          </div>
        </S.GridConcessionarieForm>
      </S.Form>
    </S.Container>
  );
};
