import styled from "styled-components";

export const Form = styled.form`
  border-radius: 10px;
  border: 1px solid #9d9d9d;
  padding: 32px 12px;
  margin: 0 auto;
  width: 100%;
  max-width: 840px;

  display: grid;
  gap: 32px 16px;
  grid-template-columns: 1fr;

  > div#wrapperButtons {
    display: flex;
    align-items: center;
    gap: 0 16px;
    justify-content: center;
  }

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "data tipo uf cidade" ". . button button";
    align-items: center;

    > :nth-child(1) {
      grid-area: data;
    }

    > :nth-child(2) {
      grid-area: tipo;
    }

    > :nth-child(3) {
      grid-area: uf;
    }

    > :nth-child(4) {
      grid-area: cidade;
    }

    > :nth-child(5) {
      grid-area: button;
    }

    > div#wrapperButtons {
      justify-content: end;
    }
  }
`;
