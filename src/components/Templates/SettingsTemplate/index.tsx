import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useSettings } from "./useSettings";

export const SettingsTemplate = () => {
  const { navigate } = useSettings();
  return (
    <S.Container>
      <Title>Concessionárias Cadastradas</Title>
      <S.Filter>
        <S.FilterTitle>Filtro</S.FilterTitle>
        <S.FilterContent>
          <div>
            <Input label="Nome" />
          </div>
          <div>
            <Input label="CNPJ" />
          </div>

          <div>
            <SimpleSelect label="Cidade" />
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
          <S.ListItem>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>xxxxxxxxxxx</p>
            <p>Cidade do atendimento</p>
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

          <S.ListItem>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>xxxxxxxxxxx</p>
            <p>Cidade do atendimento</p>
            <S.Icon
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
            />
          </S.ListItem>

          <S.ListItem>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>xxxxxxxxxxx</p>
            <p>Cidade do atendimento</p>
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
          <S.ListItem>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>xxxxxxxxxxx</p>
            <p>Cidade do atendimento</p>
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
        </S.WrapperListItens>
      </S.List>
    </S.Container>
  );
};
