import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
    margin-bottom: 54px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 820px;
  gap: 54px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "cidade local" "button button";

  > :nth-child(1) {
    grid-area: cidade;
  }
  > :nth-child(2) {
    grid-area: local;
  }
  > :nth-child(3) {
    grid-area: button;
    display: flex;
    align-content: flex-end;

    > button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 48px 0;
    grid-template-areas: "cidade" "local" "button";
  }
`;

export const RescheduleForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 820px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "cidade cidade local local" ". text text ." "data data horario horario" ". . . button";
  gap: ${pxToRem(40)};

  > :nth-child(1) {
    grid-area: cidade;
    opacity: 0.6;
  }

  > :nth-child(2) {
    grid-area: local;
    opacity: 0.5;
  }

  > :nth-child(3) {
    grid-area: text;
  }

  > :nth-child(4) {
    grid-area: data;
  }

  > :nth-child(5) {
    grid-area: horario;
  }

  > :nth-child(6) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "cidade" "local" "text" "data" "horario" "button";
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
