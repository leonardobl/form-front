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
  border: 1px solid #adb7b5;
  background: #fff;
  width: 799px;
  height: 562px;
  margin: 40px auto 0;
  padding: 70px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 48px 0;

  button {
    margin: 0 auto;
  }
`;

export const formModal = styled.form`
  width: 506px;
  height: fit-content;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);
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
    color: #7c848b;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-bottom: 24px;

    span {
      font-weight: 700;
    }
  }

  p:nth-child(4) {
    margin-bottom: 48px;
  }

  > div {
    margin-top: 1rem;
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
