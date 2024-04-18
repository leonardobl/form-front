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

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 820px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 16px;
  grid-template-areas: "nome nome" "telefone concessionaria" "button button";

  > :nth-child(1) {
    grid-area: nome;
  }
  > :nth-child(2) {
    grid-area: telefone;
  }
  > :nth-child(3) {
    grid-area: concessionaria;
  }
  > :nth-child(4) {
    grid-area: button;

    > button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "nome" "telefone" "concessionaria" "button";
  }
`;
