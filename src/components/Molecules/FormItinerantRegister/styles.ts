import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  gap: 32px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title1 title1" "cep cep" "rua rua" "numero complemento" "bairro bairro" "uf cidade" "title2 title2" "unidade unidade" "title3 title3" "data data" "horaInicio horaFim" "check check" "horaInicioCheck horaFimCheck" "tempom tempom" "vagas vagas" "title4 title4" "vistoriador vistoriador" "container container" "button button";

  > :nth-child(1) {
    grid-area: title1;
  }

  > :nth-child(2) {
    grid-area: cep;
  }

  > :nth-child(3) {
    grid-area: rua;
  }

  > :nth-child(4) {
    grid-area: numero;
  }

  > :nth-child(5) {
    grid-area: complemento;
  }

  > :nth-child(6) {
    grid-area: bairro;
  }

  > :nth-child(7) {
    grid-area: uf;
  }

  > :nth-child(8) {
    grid-area: cidade;
  }

  > :nth-child(9) {
    grid-area: title2;
  }

  > :nth-child(10) {
    grid-area: unidade;
  }

  > :nth-child(11) {
    grid-area: title3;
  }

  > :nth-child(12) {
    grid-area: data;
  }

  > :nth-child(13) {
    grid-area: horaInicio;
  }

  > :nth-child(14) {
    grid-area: horaFim;
  }

  > :nth-child(15) {
    grid-area: check;
    margin: 0 auto;
  }

  > :nth-child(16) {
    grid-area: horaInicioCheck;
  }

  > :nth-child(17) {
    grid-area: horaFimCheck;
  }

  > :nth-child(18) {
    grid-area: tempom;
  }

  > :nth-child(19) {
    grid-area: vagas;
  }

  > :nth-child(20) {
    grid-area: title4;
  }

  > :nth-child(21) {
    grid-area: vistoriador;
  }

  > :nth-child(22) {
    grid-area: container;
  }

  > :nth-child(23) {
    grid-area: button;
    margin: 0 auto;
  }

  h2 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      ". . title1 title1 . ."
      "cep cep cep rua rua rua"
      "numero numero numero complemento complemento complemento" "bairro bairro uf uf cidade cidade"
      ". . title2 title2 . ."
      ". unidade unidade unidade unidade ."
      ". . title3 title3 . ."
      "data data horaInicio horaInicio horaFim horaFim"
      ". . check check . ."
      "horaInicioCheck horaInicioCheck horaInicioCheck horaFimCheck horaFimCheck horaFimCheck"
      "tempom tempom tempom vagas vagas vagas"
      ". . title4 title4 . ."
      "vistoriador vistoriador vistoriador vistoriador vistoriador vistoriador"
      "container container container container container container"
      ". . button button . .";
  }
`;
