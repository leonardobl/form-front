import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
    margin: 0 auto;
  `}
`;

export const Banner = styled.div`
  height: 720px;
  display: flex;
  background-image: url("/assets/imgs/fundo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;

  @media (max-width: 600px) {
    height: 244px;
    padding: 32px 24px;
    background-size: cover;
    background-position: center;
  }
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
    font-family: Roboto;
    color: #eee;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 620px;
    margin-bottom: 64px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 24px;
      font-style: normal;
      line-height: 32px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      width: 230px;
      line-height: 20px;
    }
  }
`;

export const BannerRightSide = styled.div`
  flex: 1;
`;

export const TitleBlue = styled.span`
  color: #266bf0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 72px;
  align-items: center;

  @media (max-width: 500px) {
    display: block;

    button {
      margin: 0 auto;
    }

    button + button {
      margin-top: 32px;
    }
  }
`;
