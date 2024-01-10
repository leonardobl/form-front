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
import {
  IAgendamentoBasicoForm,
  IReagendamentoForm,
} from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import {
  Agendamento,
  IReagendamentoProps,
} from "../../../services/Agendamento";
import { Delivery } from "../../../services/Delivery";

export const PhysicalTemplate = () => {
  const [form, setForm] = useState<IAgendamentoBasicoForm>(
    {} as IAgendamentoBasicoForm
  );
  const { pathname } = useLocation();
  const [session, setSession] = useSessionStorage("agendamento");
  const [detalheAgendamento, setDetalheAgendamento] =
    useSessionStorage("detalheAgendamento");
  const [token, setToken] = useSessionStorage("@token");
  const [path, setPath] = useState(pathname.split("/"));
  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [date, setDate] = useState<Date>(null);
  const { isLoad, setIsLoad } = useContextSite();
  const [confirm, setConfirm] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IAgendamentoBasicoForm = {
      ...form,
      tipoAtendimento: TipoAtendimentoEnum[path[path.length - 1].toUpperCase()],
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
    };

    // if (detalheAgendamento) {
    //   setIs
    //   const PAYLOAD: IReagendamentoProps = {
    //     diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
    //     horaAgendada: form.horaAgendada,
    //     uuidAgendamento: detalheAgendamento?.uuid,
    //   };
    //   Agendamento.reagendar(PAYLOAD)
    //     .then(() => {
    //       window.open("/servicos", "_self");
    //       return
    //     })
    //     .catch(
    //       ({
    //         response: {
    //           data: { mensagem },
    //         },
    //       }) => toast.error(mensagem)
    //     )
    //     .finally(() => setIsLoad(false));
    //   return;
    // }

    setIsLoad(true);

    Agendamento.post(PAYLOAD)
      .then(({ data }) => {
        setSession(data);

        if (token) {
          return window.open("/servicos", "_self");
        }

        window.open("/login-cadastro", "_self");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
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

          setSelectOptions(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }

    if (path.includes("domicilio")) {
      Delivery.get()
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            value: item.uuid,
            label: item.cidade,
            element: item,
          }));

          setSelectOptions(options);
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
    setDate(null);
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

    if (form.uuidDelivery) {
      Delivery.getDiasIndisponiveis({ uuidDelivery: form.uuidDelivery })
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
  }, [form?.uuidLoja, form.uuidDelivery]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (form?.uuidLoja) {
        Loja.getHorariosDisponiveis({
          uuidLoja: form?.uuidLoja,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }

      if (form?.uuidDelivery) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: form?.uuidDelivery,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }
    }
  }, [date]);

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
            value={
              path.includes("loja")
                ? selectOptions.find((item) => item.value === form.uuidLoja)
                : selectOptions.find((item) => item.value === form.uuidDelivery)
            }
            options={selectOptions}
            onChange={(e) => {
              path.includes("loja")
                ? setForm((prev) => ({ ...prev, uuidLoja: e?.value }))
                : setForm((prev) => ({ ...prev, uuidDelivery: e?.value }));
            }}
          />
        </S.WrapperInput>

        <p>
          Datas e horários <S.TextBlue>disponíveis.</S.TextBlue>
        </p>

        <S.InputsContainer>
          <S.WrapperInput>
            <InputDate
              minDate={new Date()}
              showIcon={true}
              label="Data"
              required
              disabled={
                path.includes("loja") ? !form.uuidLoja : !form.uuidDelivery
              }
              excludeDates={diasIndisponiveis}
              monthsShown={2}
              onChange={(e) => setDate(e)}
              placeholderText="__/__/__"
              selected={date}
            />
          </S.WrapperInput>

          <S.WrapperInput>
            <SimpleSelect
              required
              isDisabled={!date}
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
