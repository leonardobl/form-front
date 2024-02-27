import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary};
  `}
`;

export const WrapperSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "input input input button";
  align-items: center;
  gap: 0 16px;
  margin: 0 auto;

  > :nth-child(1) {
    grid-area: input;
  }

  > :nth-child(2) {
    grid-area: button;
  }
`;

export const WrapperValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotFoundvalue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  img {
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
  width: 100%;
  max-width: ${pxToRem(1033)};
  overflow: auto;
  height: 80dvh;
  background: #e1f2ee;
`;

export const GridModal = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  padding: 90px;
  grid-template-areas: "nome nome" "cpf email" "telefone tipo" "cep rua" "complemento bairro" "uf cidade" "button button";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cpf;
  }

  > :nth-child(3) {
    grid-area: email;
  }

  > :nth-child(4) {
    grid-area: telefone;
  }

  > :nth-child(5) {
    grid-area: tipo;
  }

  > :nth-child(6) {
    grid-area: cep;
  }

  > :nth-child(7) {
    grid-area: rua;
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

    button {
      margin: 0 auto;
    }
  }
`;
