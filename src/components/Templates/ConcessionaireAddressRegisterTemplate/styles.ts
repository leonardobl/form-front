import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;
  width: 100%;
  max-width: ${(props) => props.theme.space.large};

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
`;

export const GridConcessionarieForm = styled.div`
  display: grid;
  gap: 48px 16px;
  margin-bottom: 48px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text text" "nome nome" "telefone concessionaria" "button button";

  > :nth-child(1) {
    grid-area: text;
  }

  > :nth-child(2) {
    grid-area: nome;
  }

  > :nth-child(3) {
    grid-area: telefone;
  }

  > :nth-child(4) {
    grid-area: concessionaria;
  }

  > :nth-child(5) {
    grid-area: button;
    > button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 48px 0;
    grid-template-areas: "text" "nome" "telefone" "concessionaria" "button";
  }
`;
