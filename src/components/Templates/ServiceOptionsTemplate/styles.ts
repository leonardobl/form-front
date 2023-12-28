import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    width: ${space.medio};
    margin: 0 auto;
    padding: 180px 0;

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
`;
