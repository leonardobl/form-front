import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { v4 } from "uuid";

import { components } from "react-select";

const options = [
  {
    label: `Leonardo Bernardo Lima - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
  {
    label: `Leonardo Lima - cpf/cnpj: 014.269.043-04`,
    value: v4(),
  },
  {
    label: `Leonardo - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
];

export const NewSchedulingTemplate = () => {
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };

  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <S.WrapperValue>
        {props.data.label}
        <img src={"/assets/svgs/plus-round.svg"} alt={"teste"} />
      </S.WrapperValue>
    </Option>
  );

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Novo agendamento</Title>

        <S.WrapperSearch>
          <div>
            <AsyncSimpleSelect
              variant="search"
              noOptionsMessage={() => "Não encontrado."}
              cacheOptions={true}
              loadOptions={getValues}
              options={options}
              components={{ Option: IconOption }}
            />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.WrapperSearch>
      </S.Container>
    </LayoutTemplate>
  );
};
