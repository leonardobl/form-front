import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary};
    width: 100%;

    > h1 {
      text-align: center;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  grid-template-areas: "nome nome" "cpf email" "telefone cep" "rua numero" "bairro complemento" "uf cidade" "senha confirmacao" "button button";

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
    grid-area: cep;
  }

  > :nth-child(6) {
    grid-area: rua;
  }

  > :nth-child(7) {
    grid-area: numero;
  }

  > :nth-child(8) {
    grid-area: bairro;
  }

  > :nth-child(9) {
    grid-area: complemento;
  }

  > :nth-child(10) {
    grid-area: uf;
  }

  > :nth-child(11) {
    grid-area: cidade;
  }

  > :nth-child(12) {
    grid-area: senha;
  }

  > :nth-child(13) {
    grid-area: confirmacao;
  }

  > :nth-child(14) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }
`;
