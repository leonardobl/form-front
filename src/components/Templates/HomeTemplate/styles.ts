import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding-top: ${padding.primary};
    padding-bottom: ${padding.secundary};
    width: 100%;

    > p.text {
      margin-bottom: ${pxToRem(48)};
      color: #2d2d2d;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  &[data-project-starcheck="true"] {
    > div {
      border: 0px solid #fbfffe;
      background: #e0ebff;

      button {
        background: #266bf0;
      }
    }
  }
  &[data-project-vlx="true"] {
    > div {
      border: 0px solid #fbfffe;
      background: #dbdbdb;

      button {
        background: #000000;
      }
    }
  }
  &[data-project-log="true"] {
    > div {
      border: 0px solid #fbfffe;
      background: #e9fff2;

      button {
        background: #50d05d;
      }
    }
  }
  &[data-project-tokyo="true"] {
    > div {
      border: 0px solid #fbfffe;
      background: #ffe2e2;

      button {
        background: #e42e30;
      }
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  padding: 32px 16px;
  width: 355px;
  height: 562px;
  border: 0px solid #fbfffe;
  background: #e7edec;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > h2 {
    color: #2d2d2d;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    margin-bottom: 32px;
  }

  button {
    border-radius: 10px;
    background: #20332f;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    height: 44px;
    width: 102px;
    margin-top: 48px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  flex: 1;

  p {
    color: #2d2d2d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  ul {
    li + li {
      margin-top: 24px;
    }

    li {
      list-style-image: url("/assets/svgs/icon-ok.svg");
      list-style-position: inside;
      color: #2d2d2d;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
