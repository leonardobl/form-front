import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    padding: 140px 0;
    width: 100%;

    p {
      color: #2d2d2d;
      text-align: center;
      font-family: "Roboto";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 50px;

      span {
        color: #266bf0;
      }
    }

    @media (max-width: 500px) {
      padding: 40px 24px;

      p {
        font-size: 16px;
        max-width: 185px;
        margin: 0 auto 32px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  `}
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  button {
    width: 300px;
    padding: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    button {
      max-width: 173px;
    }
  }
`;
