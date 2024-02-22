import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;

    h1 {
      text-align: center;
    }
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: ${pxToRem(952)};
  margin: 0 auto;
  background: rgba(18, 209, 167, 0.09);
  border-radius: ${pxToRem(5)};
  padding: ${pxToRem(32)} ${pxToRem(20)};

  > button {
    margin: 0 auto;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "modelo modelo ano placa" "renavam tipo chassi chassi";
  gap: ${pxToRem(32)};
  margin-bottom: 48px;

  > :nth-child(1) {
    grid-area: modelo;
  }

  > :nth-child(2) {
    grid-area: ano;
  }

  > :nth-child(3) {
    grid-area: placa;
  }

  > :nth-child(4) {
    grid-area: renavam;
  }

  > :nth-child(5) {
    grid-area: tipo;
  }

  > :nth-child(6) {
    grid-area: chassi;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${pxToRem(16)};
  font-weight: 700;
  line-height: ${pxToRem(20)};
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: ${pxToRem(16)};
  padding-left: ${pxToRem(25)};
  color: #3f504c;
  text-transform: uppercase;
`;
