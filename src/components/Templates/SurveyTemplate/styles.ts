import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    h1 {
      text-align: center;
    }

    > p {
      margin-bottom: ${pxToRem(48)};
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: ${pxToRem(840)};
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "placa renavam" "button button";
  gap: ${pxToRem(48)} ${pxToRem(40)};

  > :nth-child(1) {
    grid-area: placa;
  }

  > :nth-child(2) {
    grid-area: renavam;
  }

  > :nth-child(3) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "placa" "renavam" "button";
    gap: ${pxToRem(32)} ${pxToRem(40)};
  }
`;
