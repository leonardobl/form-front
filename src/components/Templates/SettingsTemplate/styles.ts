import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 20px;
  }
`;

export const WrapperCards = styled.button`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 32px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;
`;

export const Card = styled.div`
  border-radius: 10px;
  display: flex;

  width: 100%;
  max-width: 200px;
  height: 70px;

  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.main};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #fff;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.48px;
  }
`;
