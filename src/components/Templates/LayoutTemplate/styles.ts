import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const header = styled.header`
  height: 144px;
  background-color: #266bf0;
`;

export const HeaderContent = styled.div`
  max-width: 1158px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  height: 660px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1158px;
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
`;

export const FooterContent = styled.div`
  max-width: 1158px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  flex: 1;
  align-items: center;
  /* justify-content: space-between; */

  color: #eee;
  font-family: "Roboto";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const FooterFirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  img {
    display: block;
    max-width: 192px;
  }

  p {
    span {
      color: #266bf0;
    }
  }
`;

export const FooterSecondDiv = styled.div``;

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
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
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

  img {
    display: block;
  }

  :nth-child(2) {
    margin-bottom: 5px;
  }
`;
