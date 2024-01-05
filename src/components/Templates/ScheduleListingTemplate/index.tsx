import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Pagination } from "../../Atoms/Pagination";
import { useContextSite } from "../../../context/Context";
import {
  Agendamento,
  IGetAgendamentosProps,
} from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Municipio } from "../../../services/Municipio";
import { IPagination } from "../../../types/pagination";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
import { ISelectOptions } from "../../../types/inputs";

export const ScheduleListingTemplate = () => {
  const { setIsLoad } = useContextSite();
  const [formFilter, setFormFilter] = useState<IGetAgendamentosProps>(
    {} as IGetAgendamentosProps
  );
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>([]);
  const [date, setDate] = useState<Date>();
  const [cidadeOptions, setCidadeoptions] = useState<ISelectOptions[]>([]);
  const lojaOptions = Object.values(TipoAtendimentoEnum).map((item) => ({
    value: item,
    label: item,
  }));

  const [visao, setVisao] = useState("atendente");
  const size = 5;
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const statusOptions = Object.values(StatusAgendamentoEnum).map((item) => ({
    value: item,
    label: item.split("_").join(" "),
  }));

  const colorsStatus: { [key: string]: { color: string } } = {
    INICIADO: {
      color: "#0025A8",
    },
    AGUARDANDO_PAGAMENTO: {
      color: "#D0C808",
    },
    AGENDADO: {
      color: "#558FFF",
    },
    FINALIZADO: {
      color: "#26BE51",
    },
    CANCELADO: {
      color: "#E42E30",
    },
    ABERTO: {
      color: "#26BE51",
    },
  };

  function handleClear() {
    const values = Object.values(formFilter).some(
      (item) => item || typeof item === "number"
    );
    if (!values) return;

    setIsLoad(true);
    setFormFilter({
      cidade: null,
      data: "",
      loja: null,
      placa: "",
      renavam: "",
      veiculo: "",
      statusAgendamento: null,
      tipoAtendimento: null,
    });

    setDate(null);
    setNumberPage(0);

    Agendamento.get({ size, page: 0 })
      .then(({ data }) => {
        setAgendamentos(data.content);

        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
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
    setIsLoad(true);

    Municipio.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.nome.toUpperCase(),
          label: item.nome,
          element: item,
        }));
        setCidadeoptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, []);

  useEffect(() => {
    setIsLoad(true);

    Agendamento.get({ ...formFilter, size, page: numberPage })
      .then(({ data }) => {
        setAgendamentos(data.content);

        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, [numberPage]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const values = Object.values(formFilter).some(
      (item) => item || typeof item === "number"
    );
    if (!values) return;

    setIsLoad(true);

    setNumberPage(0);

    Agendamento.get({ ...formFilter, size, page: 0 })
      .then(({ data }) => {
        setAgendamentos(data.content);
        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
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

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Title>
          {visao === "atendente" ? "Agendamentos" : "Meus agendamentos"}
        </S.Title>
        {visao === "atendente" ? (
          <S.FormFilter onSubmit={handleSubmit}>
            <S.BorderContainer>
              <S.TitleFilter>Filtro</S.TitleFilter>
            </S.BorderContainer>
            <S.Grid gridtemplate="1.6fr 4fr 2fr 4fr" gap="0  24px">
              <S.SubTitle>Data</S.SubTitle>
              <S.SubTitle>Status</S.SubTitle>
              <S.SubTitle>Placa</S.SubTitle>
              <S.SubTitle>Renavam</S.SubTitle>
              <InputDate
                onChange={(e) => {
                  setDate(e);
                  setFormFilter((prev) => ({
                    ...prev,
                    data: reverseToIsoDate(e?.toLocaleDateString()),
                  }));
                }}
                placeholderText="__/__/__"
                isClearable
                selected={date}
              />
              <SimpleSelect
                isClearable
                placeholder=""
                value={
                  statusOptions.find(
                    (item) => item.value === formFilter?.statusAgendamento
                  ) || null
                }
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    statusAgendamento: e?.value,
                  }))
                }
                options={statusOptions}
              />
              <InputCustom
                value={formFilter?.placa}
                onChange={(e) =>
                  setFormFilter((prev) => ({ ...prev, placa: e.target.value }))
                }
              />
              <InputCustom
                type="number"
                value={formFilter.renavam}
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    renavam: e.target.value,
                  }))
                }
              />
            </S.Grid>
            <S.WrapperButtons>
              <ButtonCustom
                typeOfButton="Noborder"
                onClick={handleClear}
                type="button"
              >
                Limpar tudo
              </ButtonCustom>
              <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
            </S.WrapperButtons>
          </S.FormFilter>
        ) : (
          <S.FormFilter onSubmit={handleSubmit}>
            <S.BorderContainer>
              <S.TitleFilter>Filtro</S.TitleFilter>
            </S.BorderContainer>
            <S.Grid gridtemplate="2fr 2fr 1.5fr 2fr 2.6fr" gap="0  24px">
              <S.SubTitle>Loja</S.SubTitle>
              <S.SubTitle>Cidade</S.SubTitle>
              <S.SubTitle>Data</S.SubTitle>
              <S.SubTitle>Placa</S.SubTitle>
              <S.SubTitle>Renavam</S.SubTitle>

              <SimpleSelect
                options={lojaOptions}
                isClearable
                placeholder=""
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    tipoAtendimento: e?.value,
                  }))
                }
                value={
                  lojaOptions.find(
                    (item) => item.value === formFilter?.tipoAtendimento
                  ) || null
                }
              />
              <SimpleSelect
                isClearable
                placeholder=""
                options={cidadeOptions}
                onChange={(e) =>
                  setFormFilter((prev) => ({ ...prev, cidade: e?.value }))
                }
                value={
                  cidadeOptions.find(
                    (item) => item.value === formFilter?.cidade
                  ) || null
                }
              />
              <InputDate
                onChange={(e) => {
                  setDate(e);
                  setFormFilter((prev) => ({
                    ...prev,
                    data: reverseToIsoDate(e?.toLocaleDateString()),
                  }));
                }}
                selected={date}
                isClearable
                placeholderText="__/__/__"
              />
              <InputCustom
                value={formFilter.placa}
                onChange={(e) =>
                  setFormFilter((prev) => ({ ...prev, placa: e.target.value }))
                }
              />
              <InputCustom
                type="number"
                value={formFilter.renavam}
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    renavam: e.target.value,
                  }))
                }
              />
            </S.Grid>

            <S.Grid gridtemplate="8fr 2fr" gap="0 24px">
              <S.SubTitle>Status</S.SubTitle>
              <S.SubTitle></S.SubTitle>
              <SimpleSelect
                options={statusOptions}
                isClearable
                placeholder=""
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    statusAgendamento: e?.value,
                  }))
                }
                value={
                  statusOptions.find(
                    (item) => item.value === formFilter?.statusAgendamento
                  ) || null
                }
              />
              <S.WrapperBtn>
                <ButtonCustom
                  typeOfButton="Noborder"
                  onClick={handleClear}
                  type="button"
                >
                  Limpar tudo
                </ButtonCustom>
                <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
              </S.WrapperBtn>
            </S.Grid>
          </S.FormFilter>
        )}

        <S.GridTitles>
          <S.TitleGrid>Tipo</S.TitleGrid>
          <S.TitleGrid>Veículo</S.TitleGrid>
          <S.TitleGrid>Loja</S.TitleGrid>
          <S.TitleGrid>Cidade</S.TitleGrid>
          <S.TitleGrid>Data / Hora</S.TitleGrid>
          <S.TitleGrid>Status</S.TitleGrid>
          <S.TitleGrid></S.TitleGrid>
          <S.TitleGrid></S.TitleGrid>
        </S.GridTitles>
        {agendamentos.map((item) => (
          <S.GridItem key={`${Math.random()}-${item}`}>
            <S.ItemGrid>{item?.tipoAtendimento || "---"}</S.ItemGrid>
            <S.ItemGrid>{item?.veiculo?.tipo || "---"}</S.ItemGrid>
            <S.ItemGrid>{item?.loja?.nome || "---"}</S.ItemGrid>
            <S.ItemGrid>{item?.loja?.endereco?.cidade || "---"}</S.ItemGrid>
            <S.ItemGrid>
              {item?.diaAgendado && item?.horaAgendada
                ? `${reverseToBrDate(item?.diaAgendado)} - ${
                    item?.horaAgendada
                  }`
                : "---"}
            </S.ItemGrid>
            <S.ItemGrid $color={colorsStatus[item?.status].color}>
              {item.status || "---"}
            </S.ItemGrid>
            <S.ItemGrid>
              {item.status === "AGENDADO" && (
                <ButtonCustom typeOfButton="ScheduleList">INICIAR</ButtonCustom>
              )}
            </S.ItemGrid>
            <S.ItemGrid>
              <img
                alt="icone de visualização"
                src="/assets/imgs/visualizar-icon.svg"
                onClick={() =>
                  window.open(`/detalhe-agendamento/${item.uuid}`, "_black")
                }
              />{" "}
            </S.ItemGrid>
          </S.GridItem>
        ))}
        <Pagination
          key={`${Math.random()} - ${pagination}`}
          totalPage={pagination.totalPage}
          totalRegister={pagination.totalPage}
          actualPage={pagination.actualPage}
          setNumberPage={setNumberPage}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
