import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 24px;
  }
`;

export const Form = styled.form`
  width: 620px;
  border-radius: 5px;
  background: #266bf0;
  margin: 0 auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  border-radius: 5px;
  background: #00186d;
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.08px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.6px;
    }
  }
`;

export const FormContent = styled.div`
  padding: 50px 100px;

  @media (max-width: 500px) {
    padding: 45px 24px;
  }
`;

export const Grid = styled.div<{ $gridTemplate: string; $gap?: string }>`
  ${({ $gap, $gridTemplate }) => css`
    display: grid;
    grid-template-columns: ${$gridTemplate};
    gap: ${$gap};
    margin-bottom: 24px;

    a {
      color: #fff;
      text-align: center;
      font-family: "Poppins";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-align: end;
      margin-top: 10px;
    }

    label {
      color: #eee;
      padding-bottom: 12px;
      text-align: center;
      font-family: "Poppins";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.6px;

      span {
        color: #ed0000;
      }
    }

    @media (max-width: 500px) {
      label {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px; /
        letter-spacing: 0.48px;
      }
    }
  `}
`;

export const WrapperButton = styled.div`
  text-align: center;

  button {
    margin: 0 auto;
  }
`;
