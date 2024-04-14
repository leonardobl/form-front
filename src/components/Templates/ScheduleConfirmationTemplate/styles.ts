import styled from "styled-components";

export const Container = styled.form`
  padding: ${(props) => props.theme.padding.primary} 0;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  > p {
    margin-bottom: 48px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "data horario" "button button";
  gap: 48px;

  > :nth-child(1) {
    grid-area: data;
  }

  > :nth-child(2) {
    grid-area: horario;
  }

  > :nth-child(3) {
    grid-area: button;
    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "data" "horario" "button";
  }
`;
