import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    .title {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(840)};
  margin: 0 auto;
`;

export const GridWrapper = styled.div`
  display: grid;
  max-width: 400px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-areas: "loja" "button";
  gap: ${pxToRem(48)} 0;

  > :nth-child(1) {
    grid-area: loja;
  }

  > :nth-child(2) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    gap: ${pxToRem(40)};
  }
`;
