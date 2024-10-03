import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.theme.space.large};

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 820px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: "data data data data horario horario horario horario" "nome nome nome nome nome nome nome nome" "telefone telefone telefone telefone cep cep cep cep" "rua rua rua rua rua rua rua rua" "numero numero numero numero complemento complemento complemento complemento" "bairro bairro bairro uf uf cidade cidade cidade" "modelo modelo modelo modelo modelo modelo modelo modelo" "tipo tipo tipo ano ano placa placa placa" "renavam renavam renavam renavam chassi chassi chassi chassi" ". . . button button . . .";
  gap: 48px 16px;

  > :nth-child(1) {
    grid-area: data;
  }

  > :nth-child(2) {
    grid-area: horario;
  }

  > :nth-child(3) {
    grid-area: nome;
  }

  > :nth-child(4) {
    grid-area: telefone;
  }

  > :nth-child(5) {
    grid-area: cep;
  }

  > :nth-child(6) {
    grid-area: rua;
  }

  > :nth-child(7) {
    grid-area: numero;
  }

  > :nth-child(8) {
    grid-area: complemento;
  }

  > :nth-child(9) {
    grid-area: bairro;
  }

  > :nth-child(10) {
    grid-area: uf;
  }

  > :nth-child(11) {
    grid-area: cidade;
  }
  > :nth-child(12) {
    grid-area: modelo;
  }

  > :nth-child(13) {
    grid-area: tipo;
  }

  > :nth-child(14) {
    grid-area: ano;
  }

  > :nth-child(15) {
    grid-area: placa;
  }

  > :nth-child(16) {
    grid-area: renavam;
  }

  > :nth-child(17) {
    grid-area: chassi;
  }

  > :nth-child(18) {
    grid-area: button;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
