import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    padding: 170px 0;
    margin: 0 auto;
    max-width: ${space.large};
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    padding: 180px 0;
    margin: 0 auto;
    max-width: ${space.medio};
    width: 100%;

    h1 {
      margin-bottom: 48px;

      color: #266bf0;
      font-family: "Poppins";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.96px;
    }
  `}
`;

export const Form = styled.form`
  background: #eee;
  width: 1160px;
  min-height: 500px;
  padding: 80px 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 4fr;
  gap: 24px;
  margin-bottom: 34px;
`;

export const TitleItemGrid = styled.p`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.72px;
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
