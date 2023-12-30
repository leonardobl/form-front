import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { v4 } from "uuid";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";

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
  const [session, setSession] = useSessionStorage("agendamento");
  const [token, setToken] = useSessionStorage("@token");
  const [path, setPath] = useState(pathname.split("/"));

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const agendamento = {
      ...data,
      tipoAgendamento: path[path.length - 1],
    };
    setSession(agendamento);

    if (token) {
      return window.open("/buscar-veiculo", "_self");
    }

    window.open("/login-cadastro", "_self");
  }

  useEffect(() => {
    Loja.get()
      .then(({ data }) => console.log(data))
      .catch((error) => toast.error(error?.message));
  }, [path]);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>
          {path.includes("loja") ? "Loja Física" : "Atendimento em Domicílio"}
        </S.Title>

        <S.WrapperInput>
          <SimpleSelect
            required
            label={path.includes("loja") ? "Loja" : "Cidade"}
            value={cidadeOptions.find((item) => item.label === data.loja)}
            options={cidadeOptions}
            onChange={(e) => setData((prev) => ({ ...prev, loja: e?.label }))}
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
              required
              monthsShown={2}
              onChange={(e) => setData((prev) => ({ ...prev, data: e }))}
              placeholderText="__/__/__"
              selected={data.data}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect
              required
              value={horariosOptions.find(
                (item) => item.label === data.horario
              )}
              onChange={(e) =>
                setData((prev) => ({ ...prev, horario: e?.label }))
              }
              options={horariosOptions}
              label="Horario"
            />
          </S.WrapperInput>
        </S.InputsContainer>

        <ButtonCustom typeOfButton="BlueLight">Avançar</ButtonCustom>
      </S.Form>
    </S.Container>
  );
};
