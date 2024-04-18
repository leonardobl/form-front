import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
    margin-bottom: 54px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 820px;
  gap: 54px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "cidade local" "button button";

  > :nth-child(1) {
    grid-area: cidade;
  }
  > :nth-child(2) {
    grid-area: local;
  }
  > :nth-child(3) {
    grid-area: button;

    > button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 48px 0;
    grid-template-areas: "cidade" "local" "button";
  }
`;
