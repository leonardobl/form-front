import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    max-width: 900px;
    margin: 0 auto;

    p {
      color: #2d2d2d;
      text-align: center;
      font-family: "Roboto";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
  `}
`;

export const WrapperInput = styled.div`
  max-width: 400px;
  margin: 40px 0 48px;
  flex: 1;
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 100px;
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
`;
