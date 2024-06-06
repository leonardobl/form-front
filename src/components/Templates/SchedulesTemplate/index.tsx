import React, { useState } from "react";
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
import { IconEye } from "../../Atoms/IconEye";
import { OptionsSchedules } from "../../Atoms/OptionsSchedules";

export const SchedulesTemplate = () => {
  const {
    handleClear,
    pagination,
    dateFinal,
    dateInitial,
    setDateFinal,
    cidadeOptions,
    setDateInitial,
    statusOptions,
    isMobile,
    handleFilter,
    setNumberPage,
    formFilter,
    setFormFilter,
    tipoOptions,
    agendamentos,
    isCliente,
    menuOpen,
    setMenuOpen,
    handleCpf,
    atribuirAgendamento,
    iniciarVistoria,
  } = useSchedules();

  return (
    <S.Container>
      <Title>{isCliente ? "Meus Agendamentos" : "Agendamentos"}</Title>

      {isMobile && !menuOpen && (
        <S.ButtonFilterMobile onClick={() => setMenuOpen(true)}>
          <img src="/assets/svgs/filter.svg" alt="icone filtro" />
          Filtrar
        </S.ButtonFilterMobile>
      )}

      {menuOpen && (
        <S.Filter onSubmit={handleFilter}>
          <S.TitleFilter>Filtro</S.TitleFilter>
          <S.GridWrapper data-client={isCliente}>
            <div>
              <InputDate
                placeholderText="___/___/___"
                label="Data Inicial"
                onChange={(e) => {
                  setDateInitial(e);
                  setFormFilter((prev) => ({
                    ...prev,
                    dataInicial: reverseToIsoDate(e?.toLocaleDateString()),
                  }));
                }}
                selected={dateInitial}
              />
            </div>
            <div>
              <InputDate
                placeholderText="___/___/___"
                label="Data Final"
                onChange={(e) => {
                  setDateFinal(e);
                  setFormFilter((prev) => ({
                    ...prev,
                    dataFinal: reverseToIsoDate(e?.toLocaleDateString()),
                  }));
                }}
                selected={dateFinal}
              />
            </div>

            <div>
              <SimpleSelect
                label="Cidade"
                placeholder=""
                options={cidadeOptions}
                onChange={(e: ISelectOptions) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    cidade: e?.label,
                  }))
                }
                value={
                  cidadeOptions.find(
                    (item) => item.label === formFilter?.cidade
                  ) || null
                }
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
              <Input
                label="CPF/CNPJ"
                maxLength={18}
                value={formFilter?.cpfCnpj}
                onChange={(e) => handleCpf(e.target.value)}
              />
            </div>

            <div>
              <Input
                label="Nome"
                value={formFilter?.nome}
                onChange={(e) =>
                  setFormFilter((prev) => ({
                    ...prev,
                    nome: e.target.value,
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
              <Button>Buscar</Button>
            </div>
          </S.GridWrapper>
        </S.Filter>
      )}

      {isMobile ? (
        <S.ListMobile>
          {agendamentos?.map((item) => (
            <S.ListItemMobile key={`${Math.random()}`}>
              <S.ListItemMobileContent>
                <p>{`${item?.veiculo?.modelo} ${item.horaAgendada}`}</p>

                <Status status={item?.status} />
              </S.ListItemMobileContent>

              <div>
                <img
                  src="/assets/svgs/eye.svg"
                  alt="icone visualizacao"
                  onClick={() =>
                    window.open(
                      `/meus-agendamentos/agendamento?id=${item?.uuid}`,
                      "_blanck"
                    )
                  }
                />

                <OptionsSchedules
                  agendamento={item}
                  onAssignSchedule={atribuirAgendamento}
                  onStartSchedule={iniciarVistoria}
                />
              </div>
            </S.ListItemMobile>
          ))}
        </S.ListMobile>
      ) : (
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
              <p>
                {item?.diaAgendado
                  ? `${reverseToBrDate(item?.diaAgendado)} - ${
                      item.horaAgendada
                    }`
                  : ""}
              </p>
              <Status status={item?.status} />

              <S.WrapperActions>
                <IconEye
                  src="/assets/svgs/eye.svg"
                  alt="icone visualizacao"
                  data-color-starcheck={
                    process.env.REACT_APP_PROJECT === "starcheck"
                  }
                  data-color-log={process.env.REACT_APP_PROJECT === "log"}
                  data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                  data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
                  onClick={() =>
                    window.open(
                      `/meus-agendamentos/agendamento?id=${item?.uuid}`,
                      "_blank"
                    )
                  }
                />

                <OptionsSchedules
                  agendamento={item}
                  onAssignSchedule={atribuirAgendamento}
                  onStartSchedule={iniciarVistoria}
                />
              </S.WrapperActions>
            </S.ListItem>
          ))}
        </S.List>
      )}

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
