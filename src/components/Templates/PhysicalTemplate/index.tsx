import React, { useState } from "react";
import * as S from "./styles";
import { FaCalendar } from "react-icons/fa";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { v4 } from "uuid";

type lojaFisica = {
  loja: string;
  data: Date | null;
  cidade: string;
};

const cidadeOptions = [
  {
    label: "Calhau Sao Luiz / MA",
    value: v4(),
  },
  {
    label: "Centro Bacabal / MA",
    value: v4(),
  },
  {
    label: "XXXXX Balsas / MA",
    value: v4(),
  },
];

export const PhysicalTemplate = () => {
  const [data, setData] = useState<lojaFisica>({} as lojaFisica);

  return (
    <S.Container>
      <S.Content>
        <S.Title>Loja Física</S.Title>

        <S.WrapperInput>
          <SimpleSelect label="Loja" options={cidadeOptions} />
        </S.WrapperInput>

        <p>
          Datas e horários <S.TextBlue>disponíveis.</S.TextBlue>
        </p>

        <S.InputsContainer>
          <S.WrapperInput>
            <InputDate
              showIcon={true}
              label="Data"
              onChange={(e) => console.log(e)}
              placeholderText="__/__/__"
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect label="Horario" />
          </S.WrapperInput>
        </S.InputsContainer>
      </S.Content>
    </S.Container>
  );
};
