import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    > h1 {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(626)};
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(48)} ${pxToRem(16)};
  grid-template-areas: "nome nome" "email telefone" "cpf cep" "rua numero" "complemento bairro" "uf cidade" "senha confirmacao" "buttom buttom";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: email;
  }

  > :nth-child(3) {
    grid-area: telefone;
  }

  > :nth-child(4) {
    grid-area: cpf;
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

  > :nth-child(101) {
    grid-area: cidade;
  }

  > :nth-child(12) {
    grid-area: senha;
  }

  > :nth-child(13) {
    grid-area: confirmacao;
  }

  > :nth-child(14) {
    grid-area: buttom;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${pxToRem(32)} ${pxToRem(16)};
    grid-template-areas: "nome nome" "cpf cpf" "email email" "telefone cep" "rua rua" "numero complemento" "bairro bairro" "uf cidade" "senha confirmacao" "buttom buttom";
  }
`;
