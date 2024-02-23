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
  `}
`;

export const Info = styled.div`
  max-width: ${pxToRem(706)};
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: #e1f2ee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  font-family: Mulish;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #3f504c;
  margin-bottom: ${pxToRem(48)};

  > span {
    color: red;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(48)} ${pxToRem(40)};
  width: 100%;
  margin: 0 auto;
  max-width: ${pxToRem(706)};
  grid-template-areas: "barra barra" "valor valor" "inp inp" "button1 button2";

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
    margin-left: auto;
  }

  > :nth-child(5) {
    grid-area: button2;
    margin-right: auto;
  }
`;

export const BarCodeImg = styled.img``;
