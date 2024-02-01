import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    margin: 0 auto;
    width: 100%;
  `}
`;

export const Header = styled.header`
  height: 144px;
  background-color: #266bf0;
  width: 100%;
`;

export const HeaderContent = styled.div`
  ${({ theme: { space } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: ${space.medio};
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      display: block;
      width: 160px;
      cursor: pointer;
    }
  `}
`;

export const Content = styled.div`
  padding: 172px 20px;
`;

export const Card = styled.div`
  max-width: 1079px;
  width: 100%;
  height: 690px;
  padding: 74px 180px;
  background-color: #eeeeee;
  margin: 0 auto;

  h1 {
    font-family: Poppins;
    font-size: 300px;
    font-weight: 700;
    line-height: 320px;
    letter-spacing: 0.03em;
    text-align: center;
    margin-bottom: 32px;
    color: #2d2d2d;
  }

  h3 {
    font-family: Roboto;
    font-size: 48px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: #595959;
    margin-bottom: 24px;
  }

  p {
    color: #595959;
    margin-bottom: 40px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
  }

  button {
    margin: 0 auto;
  }
`;
