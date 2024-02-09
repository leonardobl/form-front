import { Button } from "../../Atoms/Button/index";
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 140px 0;

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
  margin-bottom: 24px;
  letter-spacing: 1.08px;

  @media (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 16px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.72px;
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
    max-width: 266px;
    margin: 0 auto 50px;

    text-align: center;
    line-height: 20px;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const WrapperInputs = styled.div<{ $gridColumns: string; $gap: string }>`
  ${({ $gridColumns, $gap }) => css`
    display: grid;
    grid-template-columns: ${$gridColumns};
    gap: ${$gap};
    margin-bottom: 50px;

    align-items: center;

    @media (max-width: 500px) {
      display: block;

      > div + div {
        margin-top: 32px;
      }
    }
  `}
`;

export const WrapperButton = styled.div`
  > button {
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    button {
      margin: auto;
    }
  }
`;
