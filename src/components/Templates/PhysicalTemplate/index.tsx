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

const horariosOptions = [
  {
    label: "09:30",
    value: v4(),
  },
  {
    label: "10:20",
    value: v4(),
  },
  {
    label: "15:30",
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
          <SimpleSelect isClearable label="Loja" options={cidadeOptions} />
        </S.WrapperInput>

        <p>
          Datas e horários <S.TextBlue>disponíveis.</S.TextBlue>
        </p>

        <S.InputsContainer>
          <S.WrapperInput>
            <InputDate
              showIcon={true}
              label="Data"
              onChange={(e) => setData((prev) => ({ ...prev, data: e }))}
              placeholderText="__/__/__"
              selected={data.data}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect
              isClearable
              options={horariosOptions}
              label="Horario"
            />
          </S.WrapperInput>
        </S.InputsContainer>
      </S.Content>
    </S.Container>
  );
};
