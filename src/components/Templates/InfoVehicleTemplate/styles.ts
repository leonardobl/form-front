import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    padding: 170px 0;
    margin: 0 auto;
    max-width: ${space.large};
    width: 100%;

    @media (max-width: 500px) {
      padding: 40px 20px;
    }
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

    @media (max-width: 500px) {
      padding: 0;

      h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.72px;
        margin-bottom: 24px;
        text-align: center;

        white-space: nowrap;
      }
    }
  `}
`;

export const Form = styled.form`
  background: #eee;
  width: 1160px;
  min-height: 500px;
  padding: 80px 40px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 32px 26px;
  }
`;

export const FirstGrid = styled.div`
  display: grid;
  grid-template-areas: "first first first second third";

  gap: 24px;
  margin-bottom: 34px;

  > :nth-child(1) {
    grid-area: first;
  }

  > :nth-child(2) {
    grid-area: second;
  }

  > :nth-child(3) {
    grid-area: third;
  }

  @media (max-width: 500px) {
    grid-template-areas: "first first" "second third";
    gap: 16px;
  }
`;

export const SecondGrid = styled.div`
  display: grid;
  grid-template-areas: "first first first second third";

  gap: 24px;
  margin-bottom: 34px;

  > :nth-child(1) {
    grid-area: first;
  }

  > :nth-child(2) {
    grid-area: second;
  }

  > :nth-child(3) {
    grid-area: third;
  }

  @media (max-width: 500px) {
    grid-template-areas: "first" "second" "third";
    gap: 16px;
  }
`;

export const TitleItemGrid = styled.p`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.72px;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    font-size: 16px;
    font-style: normal;
    margin-bottom: 12px;
    line-height: 20px;
    letter-spacing: 0.48px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
