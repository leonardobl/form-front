import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
  `}
`;

export const Banner = styled.div`
  height: 720px;
  display: flex;
  background-image: url("/assets/imgs/fundo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BannerLeftSide = styled.div`
  flex: 1;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const BannerLeftSideContent = styled.div`
  max-width: 620px;
  h1 {
    color: #eee;
    font-family: "Poppins";
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    margin-bottom: 40px;
  }

  p {
    color: #eee;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const BannerRightSide = styled.div`
  flex: 1;
`;

export const TitleBlue = styled.span`
  color: #266bf0;
`;

export const Preference = styled.div`
  padding: 180px 0;

  p {
    color: #2d2d2d;
    text-align: center;
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    max-width: 750px;
    display: block;
    margin: auto;
    margin-bottom: 80px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 72px;
  align-items: center;
`;
