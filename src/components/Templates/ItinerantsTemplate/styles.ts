import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  h1 {
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
`;
export const WrapperButtons = styled.div`
  display: flex;
  gap: 32px 16px;
  margin-bottom: 24px;
  justify-content: end;
  width: fit-content;
  flex-wrap: wrap;
  margin: 0 auto 32px;

  > :nth-child(1) {
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    justify-content: center;
    margin: 0 auto 32px;
    width: 100%;
    max-width: 840px;

    button#register {
      display: none;
    }
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 0 8px;

  img {
    display: block;
  }

  > img {
    cursor: pointer;
  }
`;

export const ItemMobile = styled.div`
  padding: 8px 16px;
  height: 94px;
  border-radius: 5px;
  display: flex;
  gap: 0 24px;
  align-items: center;

  > div:last-child {
    height: fit-content;
  }
`;

export const ItemMobileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  flex: 1;

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
`;

export const ItemMobileContentText = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #595959;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }
`;
