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
      max-width: ${pxToRem(975)};
      margin: 0 auto;
      margin-bottom: ${pxToRem(48)};
    }
  `}
`;

export const Info = styled.div`
  background-color: #e1f2ee;
  width: 100%;
  max-width: ${pxToRem(708)};
  height: ${pxToRem(59)};
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #3f504c;
  margin-bottom: ${pxToRem(72)};

  > span {
    color: red;
  }
`;

export const ImgQr = styled.img``;

export const GridWrapper = styled.div`
  max-width: ${pxToRem(740)};
  width: 100%;
  display: grid;
  margin: 0 auto;
  gap: ${pxToRem(40)};
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "qr valor valor" "qr input input" "qr button1 button2";

  button {
    width: 168px;
    height: 68px;

    white-space: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  > :nth-child(1) {
    grid-area: qr;
  }

  > :nth-child(2) {
    grid-area: valor;

    p {
      font-family: Mulish;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  > :nth-child(3) {
    grid-area: input;
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
