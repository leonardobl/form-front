import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { v4 } from "uuid";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { ISelectOptions } from "../../../types/inputs";

type lojaFisica = {
  loja: string;
  data: Date | null;
  horario: string;
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

  const isDisabled = !!(data.loja && data.horario && data.data);

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          {pathname.includes("loja-fisica")
            ? "Loja Física"
            : "Atendimento em Domicílio"}
        </S.Title>

        <S.WrapperInput>
          <SimpleSelect
            required
            label="Loja"
            isClearable
            value={cidadeOptions.find((item) => item.value === data.loja)}
            options={cidadeOptions}
            onChange={(e) => setData((prev) => ({ ...prev, loja: e?.value }))}
          />
        </S.WrapperInput>

        <p>
          Datas e horários <S.TextBlue>disponíveis.</S.TextBlue>
        </p>

        <S.InputsContainer>
          <S.WrapperInput>
            <InputDate
              showIcon={true}
              label="Data"
              isClearable
              required
              monthsShown={2}
              onChange={(e) => setData((prev) => ({ ...prev, data: e }))}
              placeholderText="__/__/__"
              selected={data.data}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect
              isClearable
              required
              value={horariosOptions.find(
                (item) => item.value === data.horario
              )}
              onChange={(e) =>
                setData((prev) => ({ ...prev, horario: e?.value }))
              }
              options={horariosOptions}
              label="Horario"
            />
          </S.WrapperInput>
        </S.InputsContainer>

        <Link to={""}>
          <ButtonCustom typeOfButton="BlueLight" disabled={!isDisabled}>
            Avançar
          </ButtonCustom>
        </Link>
      </S.Content>
    </S.Container>
  );
};
