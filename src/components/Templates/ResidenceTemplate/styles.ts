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
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: ". loja loja ." ". text text ." "data data horario horario" ". button button .";
  gap: ${pxToRem(40)};

  > :nth-child(1) {
    grid-area: loja;
  }

  > :nth-child(2) {
    grid-area: text;
  }

  > :nth-child(3) {
    grid-area: data;
  }

  > :nth-child(4) {
    grid-area: horario;
  }

  > :nth-child(5) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "loja" "text" "data" "horario" "button";
  }
`;
