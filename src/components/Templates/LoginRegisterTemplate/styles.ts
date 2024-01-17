import styled from "styled-components";

export const Container = styled.div`
  padding: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    color: #2d2d2d;
    text-align: center;
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;

    span {
      color: #266bf0;
      font-weight: 700;
    }
  }

  @media (max-width: 500px) {
    padding: 40px 24px;

    p {
      font-size: 16px;
      max-width: 186px;
      margin: 0 auto;
    }
  }
`;

export const WrapperButtons = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
`;
