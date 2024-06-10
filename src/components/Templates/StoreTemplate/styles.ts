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

export const RescheduleGridWrapper = styled.div`
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
    gap: ${pxToRem(40)};
  }
`;

export const ModalContent = styled.div`
  width: 506px;
  height: fit-content;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderModal = styled.div`
  padding: 5px 24px;

  > p {
    text-align: start;
  }
`;

export const WrapperButtonClose = styled.div`
  display: flex;
  justify-content: end;

  button {
    color: #2d2d2d;
    font-family: Mulish;
    background-color: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */
  }
`;

export const WrapperText = styled.div`
  padding: 24px;

  > h4 {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    margin-bottom: 10px;
  }

  > p {
    max-width: 360px;
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 40px;

    span {
      font-weight: 700;
    }
  }

  p:nth-child(4) {
    margin-bottom: 48px;
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;

  > :nth-child(1) {
    background-color: transparent;
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
