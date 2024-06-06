import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > img {
    cursor: pointer;
    padding: 5px;
    margin-bottom: -3px;

    &[data-disabled="true"] {
      pointer-events: none;
    }
  }
`;

export const Menu = styled.nav`
  display: none;
  position: absolute;
  height: fit-content;
  width: fit-content;
  padding: 0 16px;
  right: 6px;
  min-width: 140px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.main};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

  > div {
    padding: 16px 0;
  }

  > div + div {
    border-top: 1px solid #fff;
  }

  button {
    color: #fff;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
    background-color: transparent;
    border: none;
  }

  &[data-open="true"] {
    display: block;
  }
`;

export const ContentModal = styled.div`
  max-width: 522px;
  width: 100%;
  height: fit-content;
  padding: 16px;
  background: #e8e8e8;

  > p {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
    margin-bottom: 32px;

    span {
      font-weight: 700;
    }
  }

  div#wrapperSelectVistoriador {
    margin-bottom: 32px;
  }

  @media (max-width: 500px) {
    min-width: 80vw;
    > p {
      font-size: 16px;

      line-height: 24px;
    }
  }
`;

export const WrapperButtonX = styled.div`
  margin-bottom: 16px;

  > p {
    color: var(--PADO-1, #2d2d2d);
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 66.667% */
    cursor: pointer;
    text-align: end;
  }
`;

export const formModal = styled.form`
  max-width: 506px;
  width: 100%;
  height: fit-content;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    min-width: 80vw;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px 48px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 auto 32px;
  max-width: 1200px;
  width: 100%;

  gap: 32px;

  p {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }

  @media (max-width: 500px) {
    display: block;

    p:nth-child(2) {
      margin-top: 10px;
    }
  }
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
  display: flex;
  flex-direction: column;
  gap: 32px 0;

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
    line-height: 32px;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 500px) {
    padding: 16px;
    gap: 16px 0;

    > p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;
  margin-bottom: 16px;

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

export const FormAtribuir = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px 0;
`;

export const ButtonsForm = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;
  margin-bottom: 16px;

  > button#cancel {
    color: var(--PADO-1, #2d2d2d);
    font-family: Mulish;
    font-size: 16px;
    border: none;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
