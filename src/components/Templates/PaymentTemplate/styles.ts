import styled from "styled-components";

export const Container = styled.div`
  padding: 180px 0 60px;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Form = styled.form`
  width: 900px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.08px;
  margin-bottom: 24px;

  @media (max-width: 500px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 80px;

  @media (max-width: 500px) {
    font-size: 16px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    max-width: 200px;
    margin: 0 auto 32px;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const TextGreen = styled.span`
  color: #26be51;
  font-weight: 700;
`;

export const WrapperPayments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 70px;

  > div {
    margin-bottom: 16px;

    > p {
      color: #266bf0;

      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
  }

  @media (max-width: 500px) {
    display: block;

    > div {
      margin-bottom: 16px;

      > p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const WrapperButton = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 120px;

  @media (max-width: 500px) {
    width: fit-content;
    margin: 32px auto 40px;
  }
`;

export const TextFooter = styled.p`
  color: #2d2d2d;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  @media (max-width: 500px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    max-width: 318px;
    /* white-space: nowrap; */
  }
`;

export const TextRed = styled.span`
  color: #ed0000;
`;

export const TextStrong = styled.p`
  font-weight: 700;
  display: inline;
`;
