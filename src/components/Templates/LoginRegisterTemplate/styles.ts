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
`;

export const WrapperButtons = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
