import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    > h1 {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const FormClient = styled.form`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const FormAdmin = styled.form`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const GridClient = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  grid-template-areas: "nome nome" "cpf email" "telefone cep" "rua numero" "bairro complemento" "uf cidade" "button button";

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
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    grid-template-areas: "nome nome" "cpf cpf" "email email" "telefone cep" "rua rua" "numero complemento" "bairro bairro" "uf cidade" "button button";
  }
`;

export const GridAdmin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  grid-template-areas: "nome nome" "cpf telefone" "email email" "button button";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cpf;
  }

  > :nth-child(3) {
    grid-area: telefone;
  }

  > :nth-child(4) {
    grid-area: email;
  }

  > :nth-child(5) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 32px 16px;
    grid-template-areas: "nome" "cpf" "telefone" "email" "button";
  }
`;
