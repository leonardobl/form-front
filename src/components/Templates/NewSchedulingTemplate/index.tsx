import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { v4 } from "uuid";
import { ISelectOptions } from "../../../types/inputs";
import { Await } from "react-router-dom";

const options = [
  {
    label: `Leonardo Bernardo Lima - cpf/cnpj: 014.269.043-04   <img src="/assets/svgs/icon-search.svg" alt="icone de procura"/>`,
    value: v4(),
  },
  {
    label: `Leonardo Lima - cpf/cnpj: 014.269.043-04   <img src="/assets/svgs/icon-search.svg" alt="icone de procura"/>`,
    value: v4(),
  },
  {
    label: `Leonardo - cpf/cnpj: 014.269.043-04   <img src="/assets/svgs/icon-search.svg" alt="icone de procura"/>`,
    value: v4(),
  },
];

export const NewSchedulingTemplate = () => {
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Novo agendamento</Title>

        <S.WrapperSearch>
          <div>
            <AsyncSimpleSelect cacheOptions={true} loadOptions={getValues} />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.WrapperSearch>
      </S.Container>
    </LayoutTemplate>
  );
};
