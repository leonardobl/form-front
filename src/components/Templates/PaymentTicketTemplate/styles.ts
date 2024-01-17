import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    width: 100%;
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
  margin-bottom: 32px;

  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;

export const Info = styled.div`
  background: #eee;
  padding: 14px 30px;
  height: 60px;
  width: fit-content;
  margin: 0 auto 60px auto;

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
    padding: 10px 10px;

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const CodBarImg = styled.img`
  margin: 0 auto 30px auto;
  display: block;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const WrapperCod = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 46px;
`;

export const WrapperButtons = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;
