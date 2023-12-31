import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { v4 } from "uuid";
import { addDays } from "date-fns";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoBasicoForm } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";

export const PhysicalTemplate = () => {
  const [form, setForm] = useState<IAgendamentoBasicoForm>(
    {} as IAgendamentoBasicoForm
  );
  const { pathname } = useLocation();
  const [session, setSession] = useSessionStorage("agendamento");
  const [token, setToken] = useSessionStorage("@token");
  const [path, setPath] = useState(pathname.split("/"));
  const [lojaOptions, setLojaOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const { isLoad, setIsLoad } = useContextSite();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const agendamento = {
      ...form,
      tipoAgendamento: path[path.length - 1],
    };
    setSession(agendamento);

    if (token) {
      return window.open("/buscar-veiculo", "_self");
    }

    window.open("/login-cadastro", "_self");
  }

  useEffect(() => {
    if (path.includes("loja")) {
      Loja.get()
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            label: item.nome,
            value: item.uuid,
            element: item,
          }));

          setLojaOptions(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }
  }, [path]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, diaAgendado: null }));

    if (form?.uuidLoja) {
      Loja.getDiasIndisponiveis({ uuidLoja: form.uuidLoja })
        .then(({ data }) => {
          const options = data.map((item) => addDays(new Date(item), 1));

          setDiasIndisponiveis(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }
  }, [form?.uuidLoja]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, horaAgendada: null }));
    if (form?.diaAgendado) {
      const date = form?.diaAgendado
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-");

      Loja.getHorariosDisponiveis({
        uuidLoja: form?.uuidLoja,
        dataAgendamento: date,
      }).then(({ data }) => {
        const options = data.map((item) => ({
          value: item,
          label: item,
          element: item,
        }));

        setHorariosOptions(options);
      });
    }
  }, [form?.diaAgendado]);

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
            value={lojaOptions.find((item) => item.value === form.uuidLoja)}
            options={lojaOptions}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, uuidLoja: e?.value }));
            }}
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
              key={form.uuidLoja}
              disabled={!form.uuidLoja}
              excludeDates={diasIndisponiveis}
              monthsShown={2}
              onChange={(e) => setForm((prev) => ({ ...prev, diaAgendado: e }))}
              placeholderText="__/__/__"
              selected={form.diaAgendado}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect
              required
              isDisabled={!form?.diaAgendado}
              value={
                horariosOptions?.find(
                  (item) => item.value === form.horaAgendada
                ) || null
              }
              onChange={(e) =>
                setForm((prev) => ({ ...prev, horaAgendada: e?.value }))
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
