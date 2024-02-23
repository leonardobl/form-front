import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { Pagination } from "../../Atoms/Pagination";
import { useSchedules } from "./useSchedules";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
import { ISelectOptions } from "../../../types/inputs";

import { Status } from "../../Atoms/Status";

export const SchedulesTemplate = () => {
  const {
    date,
    handleClear,
    pagination,
    setDate,
    statusOptions,
    isMobile,
    handleFilter,
    setNumberPage,
    formFilter,
    setFormFilter,
    tipoOptions,
    agendamentos,
    iniciarVistoria,
    isCliente,
  } = useSchedules();

  return (
    <S.Container>
      <Title>{isCliente ? "Meus Agendamentos" : "Agendamentos"}</Title>

      <S.Filter onSubmit={handleFilter}>
        <S.TitleFilter>Filtro</S.TitleFilter>
        <S.GridWrapper>
          <div>
            <InputDate
              placeholderText="___/___/___"
              label="Data Inicial"
              onChange={(e) => {
                setDate(e);
                setFormFilter((prev) => ({
                  ...prev,
                  data: reverseToIsoDate(e?.toLocaleDateString()),
                }));
              }}
              selected={date}
            />
          </div>
          <div>
            <InputDate
              placeholderText="___/___/___"
              label="Data Final"
              onChange={(e) => {
                setDate(e);
                setFormFilter((prev) => ({
                  ...prev,
                  data: reverseToIsoDate(e?.toLocaleDateString()),
                }));
              }}
              selected={date}
            />
          </div>

          <div>
            <SimpleSelect
              label="Tipo"
              placeholder=""
              options={tipoOptions}
              onChange={(e: ISelectOptions) =>
                setFormFilter((prev) => ({
                  ...prev,
                  tipoAtendimento: e?.value,
                }))
              }
              value={
                tipoOptions.find(
                  (item) => item.value === formFilter?.tipoAtendimento
                ) || null
              }
            />
          </div>

          <div>
            <Input
              label="Placa"
              value={formFilter?.placa}
              onChange={(e) =>
                setFormFilter((prev) => ({
                  ...prev,
                  placa: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Input
              label="Renavam"
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
            <Input
              label="Chassi"
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
            <SimpleSelect
              value={
                statusOptions.find(
                  (item) => item.value === formFilter?.statusAgendamento
                ) || null
              }
              onChange={(e: ISelectOptions) =>
                setFormFilter((prev) => ({
                  ...prev,
                  statusAgendamento: e?.value,
                }))
              }
              options={statusOptions}
              label="Status"
              placeholder=""
            />
          </div>

          <div>
            <button type="button" onClick={handleClear}>
              Limpar tudo
            </button>
          </div>

          <div>
            <Button>BUSCAR</Button>
          </div>
        </S.GridWrapper>
      </S.Filter>

      <S.List>
        <S.ListTitles>
          <h3>Tipo</h3>
          <h3>Veículo</h3>
          <h3>Placa</h3>
          <h3>Chassi</h3>
          <h3>Cidade</h3>
          <h3>Data / Hora</h3>
          <h3>Status</h3>
          <span></span>
        </S.ListTitles>
        {agendamentos?.map((item) => (
          <S.ListItem key={`${Math.random()}`}>
            <p>{item?.tipoAtendimento}</p>
            <p>{item?.veiculo?.modelo}</p>
            <p>{item?.veiculo?.placa}</p>
            <p>{item?.veiculo?.chassi}</p>
            <p>
              {item?.loja?.endereco?.cidade
                ? item?.loja?.endereco?.cidade
                : item?.delivery?.cidade}
            </p>
            <p>{reverseToBrDate(item?.diaAgendado)}</p>
            <Status
              status={item?.status}
              onClick={() => {
                iniciarVistoria(item.uuid);
              }}
            />

            <img
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              onClick={() =>
                window.open(
                  `/meus-agendamentos/agendamento?id=${item?.uuid}`,
                  "_black"
                )
              }
            />
          </S.ListItem>
        ))}
      </S.List>
      <Pagination
        maxPageNumbersDisplayed={isMobile ? 3 : 10}
        key={`${Math.random()} - ${pagination}`}
        totalPage={pagination.totalPage}
        totalRegister={pagination.totalPage}
        actualPage={pagination.actualPage}
        setNumberPage={setNumberPage}
      />
    </S.Container>
  );
};
