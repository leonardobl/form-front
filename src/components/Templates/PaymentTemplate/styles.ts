import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    > h1 {
      text-align: center;
    }

    > p {
      margin-bottom: ${pxToRem(48)};
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: ${pxToRem(590)};
  margin-bottom: ${pxToRem(72)};
`;

export const GridWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(48)} ${pxToRem(40)};
  display: grid;
  grid-template-areas: "pix boleto" "button button";

  .legend {
    font-family: Mulish;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #20332f;
    display: block;
    margin-top: 16px;
    letter-spacing: 0em;
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  > :nth-child(1) {
    grid-area: pix;
  }

  > :nth-child(2) {
    grid-area: boleto;
  }

  > :nth-child(3) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    gap: ${pxToRem(32)} 0;
    grid-template-areas: "pix" "boleto" "button";
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const Info = styled.p`
  color: #20332f;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  position: relative;

  .textRed {
    color: #ed0000;
  }

  .textStrong {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
