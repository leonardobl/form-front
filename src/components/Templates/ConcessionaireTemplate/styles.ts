import { Button } from "./../../Atoms/Button/styles";
import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Form = styled.div`
  max-width: 816px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 48px 16px;

  grid-template-areas: "nome nome nome nome nome nome" "cnpj cnpj cnpj email email email" "telefone telefone telefone cep cep cep" "rua rua rua rua rua rua" "numero numero numero complemento complemento complemento" "bairro bairro uf uf cidade cidade" ". . button button . .";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cnpj;
  }

  > :nth-child(3) {
    grid-area: email;
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
    grid-area: button;

    > button {
      margin: 0 auto;
    }
  }
`;
