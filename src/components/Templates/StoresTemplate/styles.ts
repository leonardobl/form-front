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

export const Eye = styled.img`
  &[data-color-starcheck="true"] {
    filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(585%)
      hue-rotate(180deg) brightness(98%) contrast(94%);
  }

  &[data-color-log="true"] {
    filter: brightness(0) saturate(100%) invert(79%) sepia(16%) saturate(968%)
      hue-rotate(76deg) brightness(96%) contrast(85%);
  }

  &[data-color-vlx="true"] {
    filter: brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(79%)
      hue-rotate(181deg) brightness(95%) contrast(81%);
  }

  &[data-color-tokyo="true"] {
    filter: brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(4716%)
      hue-rotate(328deg) brightness(103%) contrast(98%);
  }
`;

export const TextNotFound = styled.p`
  text-align: center;
`;
