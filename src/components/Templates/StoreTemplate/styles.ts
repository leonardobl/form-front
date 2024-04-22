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
  /* padding: 102px 132px; */
  /* background: #6fa599; */
  max-width: 506px;
  max-height: 328px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 64px;

  p {
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    max-width: 270px;
    margin-bottom: 32px;
  }

  .wrapperButtons {
    display: flex;
    gap: 0 48px;
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 32px;

    p {
      font-size: 18px;
      line-height: 24px;
      max-width: 200px;
      margin: 0 auto 24px;
    }

    .wrapperButtons {
      gap: 0 32px;
    }
  }
`;
