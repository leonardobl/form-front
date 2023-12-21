import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css``}
`;

export const SectioStarCheckContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    display: flex;
    height: 100%;
  `}
`;

export const SectioStarCheck = styled.div`
  ${({ theme: { space } }) => css`
    background: #eee;
    height: 720px;
    padding-top: 90px;
  `}
`;

export const SectioStarCheckLeftSide = styled.div`
  ${({ theme: { space } }) => css`
    flex: 1;
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.h2`
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
`;

export const SectioStarCheckLeftSideWrapper = styled.div`
  ${({ theme: { space } }) => css`
    max-width: 80%;

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

export const SectionAbout = styled.div`
  padding: 120px 0;
`;

export const SectionAboutContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;

    button {
      margin: 0 auto;
      display: block;
      margin: 70px auto;
    }
  `}
`;

export const TextBlue = styled.span`
  color: #266bf0;
`;

export const TextDefault = styled.p`
  margin-bottom: 24px;
  color: #2d2d2d;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;

export const SectionCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperCard = styled.div`
  width: max-content;

  h3 {
    color: #111;
    text-align: center;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 40px;
  }

  h4 {
    color: #eee;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }
`;

export const Grid = styled.div<{ gridTemplate: string; gap: string }>`
  ${({ gridTemplate, gap }) => css`
    display: grid;
    grid-template-columns: ${gridTemplate};
    gap: ${gap};

    img {
      display: block;
      width: 20px;
      margin-top: 6px;
    }
  `}
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 360px;
  padding: 0 18px;
  border-radius: 5px;
  background: linear-gradient(
    217deg,
    #00186d -10.67%,
    #002ed1 -10.66%,
    #00114d 78.45%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;
