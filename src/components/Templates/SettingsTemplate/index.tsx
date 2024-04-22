import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useSettings } from "./useSettings";
import { maskCnpj } from "../../../utils/masks";
import { IAtualizarConcessionariaProps } from "../../../types/agendamento";
import { ISelectOptions } from "../../../types/inputs";

export const SettingsTemplate = () => {
  const { navigate, data, cidadesOptions, form, setForm } = useSettings();
  return (
    <S.Container>
      <Title>Concessionárias Cadastradas</Title>
      <S.Filter>
        <S.FilterTitle>Filtro</S.FilterTitle>
        <S.FilterContent>
          <div>
            <Input
              label="Nome"
              value={form?.nome}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>
          <div>
            <Input
              label="CNPJ"
              value={form?.cnpj}
              maxLength={18}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  cnpj: maskCnpj(e?.target?.value),
                }))
              }
            />
          </div>

          <div>
            <SimpleSelect
              options={cidadesOptions}
              label="Cidade"
              value={cidadesOptions.find((item) => item.value === form?.cidade)}
              onChange={(e: ISelectOptions) =>
                setForm((prev) => ({ ...prev, cidade: e?.value }))
              }
            />
          </div>

          <div>
            <button>Limpar tudo</button>
          </div>

          <div>
            <Button>BUSCAR</Button>
          </div>
        </S.FilterContent>
      </S.Filter>

      <S.List>
        <S.ListTitles>
          <h2>Nome</h2>
          <h2>CNPJ</h2>
          <h2>Cidade</h2>
          <button
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
          </button>
        </S.ListTitles>
        <S.WrapperListItens>
          {data?.map((item) => (
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
                onClick={() => ""}
              />
            </S.ListItem>
          ))}
        </S.WrapperListItens>
      </S.List>
    </S.Container>
  );
};
