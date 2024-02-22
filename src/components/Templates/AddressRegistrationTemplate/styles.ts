import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    h1 {
      text-align: center;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(840)};
  margin: 0 auto;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${pxToRem(48)} ${pxToRem(16)};
  grid-template-areas: "nome nome nome nome" "telefone cep rua rua" "numero complemento complemento complemento" "bairro bairro uf cidade" "button button button button";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: telefone;
  }

  > :nth-child(3) {
    grid-area: cep;
  }

  > :nth-child(4) {
    grid-area: rua;
  }

  > :nth-child(5) {
    grid-area: numero;
  }

  > :nth-child(6) {
    grid-area: complemento;
  }

  > :nth-child(7) {
    grid-area: bairro;
  }

  > :nth-child(8) {
    grid-area: uf;
  }

  > :nth-child(9) {
    grid-area: cidade;
  }

  > :nth-child(10) {
    grid-area: button;

    button {
      margin: 0 auto;
      width: ${pxToRem(168)};
    }
  }
`;
