import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 120px 0;
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: ${space.medio};
    margin: 0 auto;
    text-align: center;

    img {
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
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 72px;
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const WrapperContacts = styled.div`
  background: #eee;
  padding: 40px 70px;
  max-width: 627px;
  margin: 0 auto 72px;
`;

export const Subtitle = styled.p`
  color: #111;
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
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
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 48px;

  > div {
    flex: 1;
  }
`;

export const SectionLocationWrapperCardsMap = styled.div`
  padding: 80px 0;
  display: flex;

  flex-wrap: wrap;
  gap: 80px 0;
  justify-content: space-between;
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
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;
