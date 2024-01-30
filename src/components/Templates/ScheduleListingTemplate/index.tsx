import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Button } from "../../Atoms/Button";
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
import { removeEmpty } from "../../../utils/removeEmpty";
import { RolesEnum } from "../../../enums/roles";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const [cont, setCont] = useState(0);
  const [visao, setVisao] = useState("atendente");
  const size = 5;
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const [sessionClient, setSessionClient] = useSessionStorage("cliente");

  const isCliente = sessionClient?.role?.includes(RolesEnum.ROLE_CLIENTE);

  const statusOptions = Object.values(StatusAgendamentoEnum).map((item) => ({
    value: item,
    label: item.split("_").join(" "),
  }));

  const [detalheAgendamento, setDetalheAgendamento] =
    useSessionStorage("detalheAgendamento");

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

    getAgendamentos({ size, page: 0 });
  }

  function iniciarVistoria(uuidAgendamento: string) {
    Agendamento.iniciar({ uuid: uuidAgendamento })
      .then(({ data }) => {
        setDetalheAgendamento(data.uuid);
        setCont((prev) => ++prev);
        window.open(`/meus-agendamentos/detalhe-agendamento`, "_self");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }

  function getAgendamentos(filters: IGetAgendamentosProps) {
    const filtered = removeEmpty(filters);

    const idCliente = isCliente ? sessionClient?.uuid : null;

    Agendamento.get({ ...filtered, idCliente })
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

    Municipio.get({ size: 300 })
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

    getAgendamentos({ ...formFilter, size, page: numberPage });
  }, [numberPage, cont]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const values = Object.values(formFilter).some(
      (item) => item || typeof item === "number"
    );
    if (!values) return;

    setIsLoad(true);

    setNumberPage(0);

    getAgendamentos({ ...formFilter, size, page: 0 });
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
            <S.Grid2>
              <div>
                <S.SubTitle>Data</S.SubTitle>
                <InputDate
                  label={isMobile ? "Data" : ""}
                  showIcon={isMobile}
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
              </div>
              <div>
                <S.SubTitle>Status</S.SubTitle>
                <SimpleSelect
                  isClearable
                  label={isMobile ? "Status" : ""}
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
              </div>

              <div>
                <S.SubTitle>Placa</S.SubTitle>
                <InputCustom
                  value={formFilter?.placa}
                  label={isMobile ? "Placa" : ""}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      placa: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <S.SubTitle>Renavam</S.SubTitle>
                <InputCustom
                  type="number"
                  label={isMobile ? "Renavam" : ""}
                  value={formFilter.renavam}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      renavam: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <S.SubTitle>Chassi</S.SubTitle>
                <InputCustom
                  label={isMobile ? "Chassi" : ""}
                  value={formFilter?.chassi}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      chassi: e?.target?.value,
                    }))
                  }
                />
              </div>

              <div>
                <Button data-variant-ghost onClick={handleClear} type="button">
                  Limpar tudo
                </Button>
              </div>
              <div>
                <Button>Buscar</Button>
              </div>
            </S.Grid2>
          </S.FormFilter>
        ) : (
          <S.FormFilter onSubmit={handleSubmit}>
            <S.BorderContainer>
              <S.TitleFilter>Filtro</S.TitleFilter>
            </S.BorderContainer>
            <S.Grid1>
              <div>
                <S.SubTitle>Loja</S.SubTitle>
                <SimpleSelect
                  options={lojaOptions}
                  isClearable
                  placeholder=""
                  label={isMobile ? "Loja" : ""}
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
              </div>

              <div>
                <S.SubTitle>Cidade</S.SubTitle>
                <SimpleSelect
                  isClearable
                  placeholder=""
                  label={isMobile ? "Cidade" : ""}
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
              </div>

              <div>
                <S.SubTitle>Data</S.SubTitle>
                <InputDate
                  showIcon={isMobile}
                  onChange={(e) => {
                    setDate(e);
                    setFormFilter((prev) => ({
                      ...prev,
                      data: reverseToIsoDate(e?.toLocaleDateString()),
                    }));
                  }}
                  selected={date}
                  label={isMobile ? "Data" : ""}
                  isClearable
                  placeholderText="__/__/__"
                />
              </div>

              <div>
                <S.SubTitle>Placa</S.SubTitle>
                <InputCustom
                  label={isMobile ? "Placa" : ""}
                  value={formFilter.placa}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      placa: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <S.SubTitle>Renavam</S.SubTitle>
                <InputCustom
                  type="number"
                  label={isMobile ? "Renavam" : ""}
                  value={formFilter.renavam}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      renavam: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <S.SubTitle>Status</S.SubTitle>

                <SimpleSelect
                  options={statusOptions}
                  isClearable
                  placeholder=""
                  label={isMobile ? "Status" : ""}
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
              </div>

              <div>
                <S.SubTitle>Chassi</S.SubTitle>
                <InputCustom
                  label={isMobile ? "Chassi" : ""}
                  value={formFilter?.chassi}
                  onChange={(e) =>
                    setFormFilter((prev) => ({
                      ...prev,
                      chassi: e?.target?.value,
                    }))
                  }
                />
              </div>

              <Button data-variant-ghost onClick={handleClear} type="button">
                Limpar tudo
              </Button>
              <Button>Buscar</Button>
            </S.Grid1>
          </S.FormFilter>
        )}

        {!!agendamentos?.length ? (
          isMobile ? (
            <>
              {agendamentos.map((item) => (
                <S.ItemListagemMobile key={`${Math.random()}`}>
                  <div>
                    <h4>
                      {item?.veiculo?.tipo || "---"}
                      <span>{reverseToBrDate(item?.diaAgendado)}</span>
                    </h4>
                    <S.ItemGrid $color={colorsStatus[item?.status].color}>
                      {item.status || "---"}
                    </S.ItemGrid>
                  </div>
                  <img
                    alt="icone de visualização"
                    src="/assets/imgs/visualizar-icon.svg"
                    onClick={() => {
                      setDetalheAgendamento(item.uuid);
                      window.open(
                        `/meus-agendamentos/detalhe-agendamento`,
                        "_black"
                      );
                    }}
                  />{" "}
                </S.ItemListagemMobile>
              ))}
              <Pagination
                maxPageNumbersDisplayed={isMobile ? 3 : 10}
                key={`${Math.random()} - ${pagination}`}
                totalPage={pagination.totalPage}
                totalRegister={pagination.totalPage}
                actualPage={pagination.actualPage}
                setNumberPage={setNumberPage}
              />
            </>
          ) : (
            <>
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
                  <S.ItemGrid>
                    {item?.loja?.endereco?.cidade || "---"}
                  </S.ItemGrid>
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
                    {item.status === "AGENDADO" && !isCliente && (
                      <S.ButtonStart
                        onClick={() => {
                          iniciarVistoria(item.uuid);
                        }}
                      >
                        INICIAR
                      </S.ButtonStart>
                    )}
                  </S.ItemGrid>
                  <S.ItemGrid>
                    <img
                      alt="icone de visualização"
                      src="/assets/imgs/visualizar-icon.svg"
                      onClick={() => {
                        setDetalheAgendamento(item.uuid);
                        window.open(
                          `/meus-agendamentos/detalhe-agendamento`,
                          "_black"
                        );
                      }}
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
            </>
          )
        ) : null}
      </S.Container>
    </LayoutTemplate>
  );
};
