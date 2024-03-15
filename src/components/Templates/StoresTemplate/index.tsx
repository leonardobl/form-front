import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";

export const StoresTemplate = () => {
  return (
    <S.Container>
      <Title>Atendimento Loja</Title>
      <S.List>
        <S.HeaderList>
          <h4>Horário</h4>
          <h4>Cliente</h4>
          <h4>Veículo</h4>
          <h4>Placa</h4>
          <h4>Chassi</h4>
          <h4>Status</h4>
          <span></span>
        </S.HeaderList>
        <S.BodyList>
          <S.RowList>
            <p>8:00</p>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <span>
              <button>INICIAR</button>
              <button>EM ESPERA</button>
            </span>
            <img src="/assets/svgs/eye.svg" alt="icone olho" />
          </S.RowList>
          <S.RowList>
            <p>8:00</p>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <span>
              <button>INICIAR</button>
              <button>EM ESPERA</button>
            </span>
            <img src="/assets/svgs/eye.svg" alt="icone olho" />
          </S.RowList>
          <S.RowList>
            <p>8:00</p>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <span>
              <button>INICIAR</button>
              <button>EM ESPERA</button>
            </span>
            <img src="/assets/svgs/eye.svg" alt="icone olho" />
          </S.RowList>
          <S.RowList>
            <p>8:00</p>
            <p>NOME DO CLIENTE COMPLETO</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <span>
              <button>INICIAR</button>
              <button>EM ESPERA</button>
            </span>
            <img src="/assets/svgs/eye.svg" alt="icone olho" />
          </S.RowList>
          yarn starrt
        </S.BodyList>
      </S.List>
    </S.Container>
  );
};
