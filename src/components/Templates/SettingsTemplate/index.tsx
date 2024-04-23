import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useSettings } from "./useSettings";
import { maskCnpj } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";
import { Pagination } from "../../Atoms/Pagination";

export const SettingsTemplate = () => {
  const {
    navigate,
    data,
    cidadesOptions,
    form,
    setForm,
    pagination,
    setNumberPage,
    isMobile,
    handleClean,
    handleFilter,
    isOpen,
    setIsOpen,
  } = useSettings();
  return (
    <S.Container>
      <Title>Concessionárias Cadastradas</Title>

      {!isOpen && (
        <S.MenuMobile>
          <S.ButtonFilter onClick={() => setIsOpen(true)}>
            <img alt="imagem icone filtro" src="/assets/svgs/filter-dark.svg" />{" "}
            Filtrar
          </S.ButtonFilter>

          <S.ButtonRegister
            onClick={() => navigate("/configuracoes/cadastro-concessionaria")}
          >
            Cadastrar{" "}
            <S.Icon
              src="/assets/svgs/plus-round.svg"
              alt="icone +"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
            />
          </S.ButtonRegister>
        </S.MenuMobile>
      )}

      {isOpen && (
        <S.Filter onSubmit={handleFilter}>
          <S.FilterTitle>Filtro</S.FilterTitle>
          <S.FilterContent>
            <div>
              <Input
                label="Nome"
                value={form?.nome}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, nome: e?.target?.value }))
                }
              />
            </div>
            <div>
              <Input
                label="CNPJ"
                value={form?.cpfCnpj}
                maxLength={18}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    cpfCnpj: maskCnpj(e?.target?.value),
                  }))
                }
              />
            </div>

            <div>
              <SimpleSelect
                options={cidadesOptions}
                label="Cidade"
                value={
                  cidadesOptions.find((item) => item.label === form?.cidade) ||
                  null
                }
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, cidade: e?.label }))
                }
              />
            </div>

            <div>
              <button type="button" onClick={handleClean}>
                Limpar tudo
              </button>
            </div>

            <div>
              <Button>BUSCAR</Button>
            </div>
          </S.FilterContent>
        </S.Filter>
      )}

      <S.List>
        <S.ListTitles>
          <h2>Nome</h2>
          <h2>CNPJ</h2>
          <h2>Cidade</h2>
          <S.ButtonRegister
            onClick={() => navigate("/configuracoes/cadastro-concessionaria")}
          >
            Cadastrar{" "}
            <S.Icon
              src="/assets/svgs/plus-round.svg"
              alt="icone +"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
            />
          </S.ButtonRegister>
        </S.ListTitles>
        <S.WrapperListItens>
          {data?.map((item) =>
            isMobile ? (
              <S.ListItemMobile key={`${Math.random()}`}>
                <div id="wrapper">
                  <div id="text">
                    <p>{maskCnpj(item?.cpfCnpj) || " --- "}</p>
                    <p>{item?.endereco?.cidade || " --- "}</p>
                  </div>
                  <p>{item?.nome || " --- "}</p>
                </div>

                <S.Icon
                  src="/assets/svgs/eye.svg"
                  alt="icone visualizacao"
                  data-color-starcheck={
                    process.env.REACT_APP_PROJECT === "starcheck"
                  }
                  data-color-log={process.env.REACT_APP_PROJECT === "log"}
                  data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                  data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
                  onClick={() =>
                    navigate(
                      `/configuracoes/cadastro-concessionaria?id=${item.uuid}`
                    )
                  }
                />
              </S.ListItemMobile>
            ) : (
              <S.ListItem key={`${Math.random()}`}>
                <p>{item?.nome || " --- "}</p>
                <p>{maskCnpj(item?.cpfCnpj) || " --- "}</p>
                <p>{item?.endereco?.cidade || " --- "}</p>
                <S.Icon
                  src="/assets/svgs/eye.svg"
                  alt="icone visualizacao"
                  data-color-starcheck={
                    process.env.REACT_APP_PROJECT === "starcheck"
                  }
                  data-color-log={process.env.REACT_APP_PROJECT === "log"}
                  data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                  data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
                  onClick={() =>
                    navigate(
                      `/configuracoes/cadastro-concessionaria?id=${item.uuid}`
                    )
                  }
                />
              </S.ListItem>
            )
          )}
        </S.WrapperListItens>
        {data.length > 0 && (
          <Pagination
            key={`${Math.random()} - ${data?.length}`}
            totalPage={pagination.totalPage}
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            totalRegister={pagination.totalPage}
            actualPage={pagination.actualPage}
            setNumberPage={setNumberPage}
          />
        )}
      </S.List>
    </S.Container>
  );
};
