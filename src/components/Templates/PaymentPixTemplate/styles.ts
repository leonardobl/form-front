import styled, { css } from "styled-components";

export const Continer = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: ${space.medio};
    margin: 0 auto;
    max-width: 100%;
  `}
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
  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 16px;
    text-align: center;
    max-width: 316px;
  }
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;

export const Info = styled.div`
  background: #eee;
  padding: 14px 30px;
  display: flex;
  width: max-content;
  margin: 0 auto 70px;
  align-items: center;
  justify-content: center;

  p {
    color: #266bf0;
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;

    span {
      color: #ed0000;
      margin-right: 6px;
    }
  }

  @media (max-width: 500px) {
    width: fit-content;
    padding: 10px 20px;

    p {
      font-size: 16px;
      text-align: center;

      font-weight: 400;
      line-height: 20px;
      max-width: 312px;
    }
  }
`;

export const WrapperDataPayment = styled.div`
  width: 712px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    gap: 24px 0;
  }
`;

export const DataPaymentContent = styled.div`
  display: flex;
  flex: 1;

  align-items: end;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  @media (max-width: 500px) {
    gap: 32px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  align-items: center;
  gap: 28px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Qrcode = styled.img`
  display: block;

  @media (max-width: 500px) {
    width: 130px;
  }
`;
