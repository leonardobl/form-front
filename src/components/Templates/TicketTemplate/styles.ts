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
      max-width: ${pxToRem(1138)};
      margin: 0 auto 48px;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const Info = styled.div`
  max-width: ${pxToRem(706)};
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${pxToRem(48)};

  > p {
    font-family: Mulish;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: #3f504c;

    > span {
      color: red;
    }
  }

  @media (max-width: 500px) {
    > p {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(48)} ${pxToRem(40)};
  width: 100%;
  margin: 0 auto;
  max-width: ${pxToRem(706)};
  grid-template-areas: "barra barra" "valor valor" "inp inp" "button1 button1";

  button {
    width: 168px;
    height: 68px;
    white-space: normal;
  }

  > :nth-child(1) {
    grid-area: barra;
  }

  > :nth-child(2) {
    grid-area: valor;

    p {
      text-align: center;

      font-family: Mulish;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  > :nth-child(3) {
    grid-area: inp;
  }

  > :nth-child(4) {
    grid-area: button1;
    margin: 0 auto;
  }

  > :nth-child(5) {
    grid-area: button2;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    gap: ${pxToRem(32)} ${pxToRem(16)};
    grid-template-columns: 1fr;
    grid-template-areas: "barra" "valor" "inp" "button1" "button2";

    > :nth-child(2) {
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
      }
    }

    > :nth-child(4) {
      margin: auto;
    }

    > :nth-child(5) {
      margin: auto;
    }
  }
`;

export const BarCodeImg = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
`;
