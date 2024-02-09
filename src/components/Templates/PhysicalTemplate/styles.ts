import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 140px 0;

  @media (max-width: 500px) {
    padding: 40px 24px;
  }
`;

export const Form = styled.form`
  ${({ theme: { space } }) => css`
    width: 900px;
    margin: 0 auto;

    button {
      margin-left: 100%;
      transform: translateX(-100%);
    }

    p {
      color: #2d2d2d;
      text-align: center;
      font-family: "Roboto";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
    @media (max-width: 500px) {
      width: 100%;

      p {
        font-size: 16px;
      }
    }
  `}
`;

export const WrapperInput = styled.div`
  max-width: 400px;
  margin: 40px 0 48px;
  flex: 1;

  @media (max-width: 500px) {
    width: 100%;
    margin: 32px 0;
    flex: 0;

    + div {
      margin-top: 0;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const Title = styled.h1`
  color: #266bf0;

  margin-bottom: 48px;
  font-family: "Poppins";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.08px;

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.72px;
    text-align: center;
  }
`;

export const ContentModal = styled.div`
  padding: 102px;
  width: 604px;
  height: 400px;
  background: #266bf0;

  p {
    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    margin-bottom: 40px;
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
