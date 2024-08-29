import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 756px;
  padding: 32px 12px;

  border-radius: 10px;
  border: 1px solid #9d9d9d;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px 16px;
  margin-bottom: 32px;

  > :last-child {
    display: flex;
    justify-content: center;
    gap: 0 16px;
  }

  @media (min-width: 640px) {
    padding: 32px;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "cidade data button";

    > :nth-child(1) {
      grid-area: cidade;
    }

    > :nth-child(2) {
      grid-area: data;
    }

    > :nth-child(3) {
      grid-area: button;
      margin-left: auto;
    }
  }
`;
