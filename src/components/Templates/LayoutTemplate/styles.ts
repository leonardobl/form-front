import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
    margin: 0 auto;
  `}
`;

export const header = styled.header`
  height: 144px;
  background-color: #266bf0;

  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;

export const HeaderContent = styled.div`
  ${({ theme: { space } }) => css`
    @media (max-width: 500px) {
      gap: 0 16px;
    }

    max-width: ${space.medio};
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Logo = styled.img`
  @media (max-width: 500px) {
    width: 105px;
  }
`;

export const MenuMobile = styled.img`
  @media (max-width: 500px) {
    display: block;
  }

  display: none;
`;

export const HeaderMenu = styled.nav`
  @media (max-width: 500px) {
    display: none;
  }

  display: flex;
  gap: 40px;
  align-items: center;

  a {
    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const Footer = styled.footer`
  background: #00114d;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBar = styled.div`
  height: 104px;
  border-top: 1px solid #d9d9d9;
`;

export const FooterBarContent = styled.div`
  ${({ theme: { space } }) => css`
    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: space-around;

      > h3 {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
      }
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${space.medio};
    margin: 0 auto;
    height: 100%;

    h3 {
      color: #eee;
      font-family: "Poppins";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;

      span {
        color: #266bf0;
      }
    }
  `}
`;

export const FooterContent = styled.div`
  ${({ theme: { space } }) => css`
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    max-width: 1158px;
    margin: 0 auto;
    display: grid;
    padding: 100px 0;
    grid-template-columns: repeat(3, 1fr);

    gap: 100px;
    flex: 1;
    align-items: center;

    color: #eee;
    font-family: "Roboto";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  `}
`;

export const FooterFirstDiv = styled.div`
  @media (max-width: 500px) {
    > img {
      width: 137px;
    }
  }
`;

export const FooterSecondDiv = styled.div`
  @media (max-width: 500px) {
    > div {
      gap: 0;
      margin-top: 0;

      > img {
        width: 32px;
      }

      > p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }

  display: flex;
  flex-direction: column;
  align-items: start;

  > div {
    display: flex;
    gap: 10px;
    margin-top: 22px;

    > img {
      margin-top: -5px;
    }
  }
`;

export const FooterThirdDiv = styled.div``;

export const WrapperThirdDivContent = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 16px 0;
  margin-bottom: 40px;

  p {
    span {
      font-family: "Roboto";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
  }
`;

export const TitleSectionFooter = styled.h3`
  @media (max-width: 500px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
    margin-top: 16px;
  }

  color: #eee;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const TextSectionFooter = styled.p`
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const SubTextSectionFooter = styled.span`
  color: #266bf0;
  margin-bottom: 22px;
  display: inline-block;
`;

export const WrapperSocialIconsFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 18px 0;

  justify-content: center;

  img {
    display: block;
  }

  :nth-child(2) {
    margin-bottom: 5px;
  }
`;

export const ButtonMySchedule = styled.button`
  @media (max-width: 500px) {
    display: none;
  }

  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 54px;
  background: linear-gradient(180deg, #0025a8 0%, #00114d 100%);

  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const WrapperButtons = styled.div`
  @media (max-width: 500px) {
    gap: 0 20px;
    flex: 1;
    justify-content: space-around;
  }

  display: flex;
  align-items: center;
  gap: 0 48px;
`;
