import styled, { css } from "styled-components";

export const Footer = styled.footer`
  background: #00114d;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBar = styled.div`
  height: 104px;
  border-top: 1px solid #d9d9d9;

  @media (max-width: 500px) {
    height: 160px;
  }
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

    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;

      > h3 {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
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
    width: 100%;

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

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      padding: 32px 0 16px;
    }
  `}
`;

export const FooterFirstDiv = styled.div`
  > img {
    margin: 0 auto;
    display: block;
  }

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

    > img {
      margin-top: -5px;
    }
  }
`;

export const FooterThirdDiv = styled.div`
  /* width: fit-content; */
`;

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
  }

  margin-bottom: 20px;
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
  margin-left: 75px;
  /* margin: 18px 0; */

  width: fit-content;

  img {
    display: block;
  }

  :nth-child(1) {
    margin-left: -6px;
  }

  :nth-child(2) {
    margin-bottom: 5px;
  }

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;
