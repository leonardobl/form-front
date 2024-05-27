import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 20px;
    width: 100%;

    > h1 {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 500px) {
    .gridItemFake {
      display: none;
    }
  }
`;

export const GridHeader = styled.div`
  height: 38px;
  border: 1px solid #adb7b5;

  display: grid;
  grid-template-columns: 100px 1fr;

  > p {
    border-right: 1px solid #adb7b5;
    color: #fff;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
    text-transform: uppercase;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > :nth-child(1),
  > :nth-child(2) {
    background-color: ${(props) => props.theme.colors.main};
  }

  @media (max-width: 500px) {
    display: block;

    > p {
      padding: 0 8px;
      justify-content: start;
    }
  }
`;

export const GridHeaderEmEspera = styled.div`
  height: 38px;

  grid-template-columns: 100px 1fr;
  display: grid;

  > :nth-child(2) {
    border: 1px solid #adb7b5;
    background-color: ${(props) => props.theme.colors.main};

    p {
      color: #fff;
      text-align: center;
      font-family: Mulish;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px; /* 190% */
      text-transform: capitalize;
    }
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const Body = styled.div`
  border-right: 1px solid #adb7b5;
  border-bottom: 1px solid #adb7b5;
  border-left: 1px solid #adb7b5;
`;

export const HeaderBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.6fr 1fr 1.6fr 1fr 0.4fr;
  padding: 16px 32px;

  > h4 {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const BodyItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.6fr 1fr 1.6fr 1fr 0.4fr;
  padding: 16px 32px;

  > p {
    color: #595959;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }

  & + div {
    margin-top: 16px;
  }

  &:nth-child(odd) {
    background: #f7f7f7;
  }

  &:nth-child(even) {
    background: #e8e8e8;
  }

  .wrapperMobile {
    > p {
      white-space: nowrap;
      color: #2d2d2d;
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 200% */
      letter-spacing: 0.36px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 500px) {
    padding: 16px 8px;
    display: flex;
    justify-content: space-between;
  }
`;

export const WrapperActions = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
  justify-content: end;

  > img {
    cursor: pointer;
    padding: 5px;
  }
`;

export const TextNotFound = styled.p`
  text-align: center;
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
