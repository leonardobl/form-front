import React, { useState } from "react";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { v4 } from "uuid";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

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
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {pathname.includes("loja-fisica")
            ? "Loja Física"
            : "Atendimento em Domicílio"}
        </S.Title>

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

        <Link to={""}>
          <ButtonCustom typeOfButton="BlueLight">Avançar</ButtonCustom>
        </Link>
      </S.Content>
    </S.Container>
  );
};
