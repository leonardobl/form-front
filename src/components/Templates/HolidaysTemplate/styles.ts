import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;

  > h1 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    margin-bottom: 32px;
  }

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 32px 16px;
  margin-bottom: 24px;
  justify-content: end;
  width: fit-content;
  flex-wrap: wrap;
  margin-left: auto;

  > :nth-child(1) {
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    justify-content: center;
    margin: 0 auto 32px;
    width: 100%;
    max-width: 840px;

    button#registerMobile {
      display: none;
    }
  }
`;

export const ItemMobile = styled.div`
  padding: 8px 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;

  > span {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    justify-content: space-between;

    p {
      color: #595959;
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
    }
  }
`;
