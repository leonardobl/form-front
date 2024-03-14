import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useDeliverys } from "./useDeliverys";

export const DeliverysTemplates = () => {
  const { date, setDate, formFilter, setFormFilter, cidadesOptions } =
    useDeliverys();

  return (
    <S.Container>
      <Title>Deliverys</Title>

      <S.FormFilter>
        <S.HeaderFormFilter>Filtro</S.HeaderFormFilter>
        <S.GridFormFilter>
          <div>
            <InputDate
              label="Data"
              selected={date}
              placeholderText="___/___/___"
              onChange={(e) => setDate(e)}
            />
          </div>
          <div>
            <SimpleSelect options={cidadesOptions} label="Cidade" />
          </div>
          <div>
            <button className="buttonClean">Limpar tudo</button>
          </div>
          <div>
            <Button>BUSCAR</Button>
          </div>
        </S.GridFormFilter>
      </S.FormFilter>

      <S.List>
        <S.ListHeader>
          <h4>Cliente</h4>
          <h4>Veículo</h4>
          <h4>Placa</h4>
          <h4>Chassi</h4>
          <h4>Cidade</h4>
          <h4>Horário</h4>
          <button>
            <S.WrapperImgsButton>
              <img
                src="/assets/svg/download-icon.svg"
                alt="icone download documento"
              />
              <img src="/assets/svg/doc-icon.svg" alt="icone documento" />
            </S.WrapperImgsButton>
            Exportar
          </button>
        </S.ListHeader>
        <S.ListBody>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
          <S.ListItem>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade</p>
            <p>8:00</p>
            <p></p>
          </S.ListItem>
        </S.ListBody>
      </S.List>
    </S.Container>
  );
};
