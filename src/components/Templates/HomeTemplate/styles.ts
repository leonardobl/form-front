import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    background: #eee;
    height: 720px;
    padding-top: 90px;
  `}
`;

export const SectioStarCheck = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    display: flex;
    height: 100%;
  `}
`;

export const SectioStarCheckLeftSide = styled.div`
  ${({ theme: { space } }) => css`
    flex: 1;
    display: flex;
    align-items: center;
  `}
`;

export const SectioStarCheckLeftSideWrapper = styled.div`
  ${({ theme: { space } }) => css`
    max-width: 80%;

    h1 {
      color: #111;
      font-family: "Poppins";
      font-size: 72px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;
      margin-bottom: 24px;

      span {
        display: block;
      }
    }

    p {
      color: #2d2d2d;
      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 20px;

      span {
        color: #266bf0;
      }
    }
  `}
`;

export const SectioStarCheckRightSide = styled.div`
  ${({ theme: { space } }) => css`
    flex: 1;
  `}
`;

export const SectioStarCheckRightSideWrapper = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;

    img {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: "";
      top: -30px;
      right: -10px;
      display: block;
      width: 477px;
      height: 314px;
      position: absolute;
      border-radius: 5px;
      background: #00186d;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &::after {
      content: "";
      border-radius: 5px;
      display: block;
      position: absolute;
      bottom: -20px;
      left: -30px;
      background: #266bf0;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 477px;
      height: 314px;
    }
  `}
`;
