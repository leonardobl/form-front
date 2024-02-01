import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
    margin: 0 auto;

    background-image: url("/assets/imgs/fundo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 500px) {
      background-image: url("/assets/imgs/fundo-mobile.svg");
    }
  `}
`;

export const Banner = styled.div`
  ${({ theme: { space } }) => css`
    height: 720px;
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: ${space.medio};

    @media (max-width: 600px) {
      height: 330px;
      padding: 32px 24px;
    }
  `}
`;

export const BannerLeftSide = styled.div`
  width: 53%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BannerLeftSideContent = styled.div`
  width: 100%;
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
      margin-bottom: 24px;
    }

    p {
      display: none;
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
  gap: 72px;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px 0;
    align-items: start;
  }
`;
