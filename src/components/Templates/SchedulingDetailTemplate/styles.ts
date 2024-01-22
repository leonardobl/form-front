import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: 100%;
    max-width: ${space.medio};
    margin: 0 auto;
  `}
`;

export const Title = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 36px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.08px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 64px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const Form = styled.form`
  background: #eee;
  padding: 40px 80px;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 20px 20px;
    margin-bottom: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  padding: 16px 0;
  gap: 0 30px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  padding: 16px 0;
  gap: 0 30px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 2fr;
  padding: 16px 0;
  gap: 0 30px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`;

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  padding: 16px 0;
  gap: 0 30px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`;

export const SubTitle = styled.h3`
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
  }
`;

export const WrapperBorder = styled.div<{ $borderBottom?: boolean }>`
  ${({ $borderBottom }) => css`
    padding-top: 40px;
    border-bottom: ${$borderBottom ? "1px solid #cacaca" : "none"};

    @media (max-width: 500px) {
      border-bottom: none;
    }
  `}
`;

export const WrapperBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 72px;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const ModalContent = styled.div`
  padding: 102px 132px;
  background: #266bf0;

  p {
    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    max-width: 340px;
    margin-bottom: 40px;
  }

  button {
    margin: 0 auto;
    display: block;
  }
`;
