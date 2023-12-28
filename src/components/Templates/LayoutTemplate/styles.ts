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
`;

export const HeaderContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const HeaderMenu = styled.nav`
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

export const FooterFirstDiv = styled.div``;

export const FooterSecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    display: flex;
    gap: 10px;
    margin-top: 22px;
    img {
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
