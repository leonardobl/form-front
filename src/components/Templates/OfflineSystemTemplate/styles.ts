import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
    width: 100%;
    padding: 120px 0;
    margin: 0 auto;

    @media (max-width: 500px) {
      padding: 40px 20px;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    width: 100%;
    margin: 0 auto;
    text-align: center;
    border: 1px solid red img {
      margin-bottom: 20px;
    }
  `}
`;

export const Title = styled.h1`
  color: #000;
  font-family: "Poppins";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 1.44px;
  margin-bottom: 32px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const SectionTitle = styled.h2`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0.96px;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 72px;

  @media (max-width: 500px) {
    font-size: 16px;
    max-width: 264px;
    margin: 0 auto 24px;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const WrapperContacts = styled.div`
  background: #eee;
  padding: 40px 70px;
  max-width: 627px;
  margin: 0 auto 72px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 24px 40px;
  }
`;

export const Subtitle = styled.p`
  color: #111;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Contact = styled.p`
  color: #111;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-top: 20px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const GridContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  grid-template-areas: "children1 children2" "children3  children3";

  :nth-child(1) {
    grid-area: children1;
  }

  :nth-child(2) {
    grid-area: children2;
  }
  :nth-child(3) {
    grid-area: children3;
  }

  @media (max-width: 500px) {
    display: block;

    > div + div {
      margin-top: 24px;
    }
  }
`;

export const GridLocalizations = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 56px;
  grid-template-areas:
    "children1 children1 children1 children2 children2 children2 children3 children3 children3 children4 children4 children4"
    "children5 children5 children5 children5 children6 children6 children6 children6 children7 children7 children7 children7";

  :nth-child(1) {
    grid-area: children1;
  }

  :nth-child(2) {
    grid-area: children2;
  }
  :nth-child(3) {
    grid-area: children3;
  }
  :nth-child(4) {
    grid-area: children4;
  }
  :nth-child(5) {
    grid-area: children5;
  }
  :nth-child(6) {
    grid-area: children6;
  }
  :nth-child(7) {
    grid-area: children7;
  }

  @media (max-width: 500px) {
    display: block;

    > div + div {
      margin-top: 44px;
    }
  }
`;

export const SectionLocationWrapperCardsMap = styled.div`
  padding: 80px 0;
  display: flex;

  flex-wrap: wrap;
  gap: 80px 0;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SectionLocationCardMap = styled.div`
  h2 {
    justify-content: center;
  }

  p {
    color: #2d2d2d;
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    margin-top: 24px;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

export const TitleLocalization = styled.h2`
  display: flex;
  color: #111;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  span {
    text-align: left;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;
