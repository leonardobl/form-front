import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(840)};
  margin: 0 auto;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 400px;
  margin: 0 auto;
  grid-template-areas: "cidade" "button";
  gap: ${pxToRem(48)} 0;

  > :nth-child(1) {
    grid-area: cidade;
  }

  > :nth-child(2) {
    grid-area: button;
    button {
      margin: 0 auto;
    }
  }
`;
