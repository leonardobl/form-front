import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 20px;
    width: 100%;

    > h1 {
      text-align: center;
    }
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
`;

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`;

export const Body = styled.div`
  border-right: 1px solid #adb7b5;
  border-bottom: 1px solid #adb7b5;
  border-left: 1px solid #adb7b5;
`;

export const HeaderBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 0.6fr;
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
`;

export const BodyItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 0.6fr;
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
  border: 0.5px solid #000;
  background: #fff;
  width: 40.5rem;
  height: 32.375rem;
  padding: 7rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem 0;

  button {
    margin: 0 auto;
  }
`;
