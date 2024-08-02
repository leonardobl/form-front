import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 756px;
  margin: 0 auto;
  padding: 32px 12px;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px 16px;

  > :last-child {
    display: flex;
    justify-content: center;
    gap: 0 16px;
  }

  @media (min-width: 640px) {
    padding: 32px;
    margin-bottom: 32px;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "unidade cidade data" ". button button";

    > :nth-child(1) {
      grid-area: unidade;
    }

    > :nth-child(2) {
      grid-area: cidade;
    }

    > :nth-child(3) {
      grid-area: data;
    }

    > :nth-child(4) {
      grid-area: button;
      margin-left: auto;
    }
  }
`;
