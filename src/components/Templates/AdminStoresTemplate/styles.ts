import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;
  h2 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    display: block;
    margin-bottom: 48px;
  }

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const Table = styled.div`
  margin: 0 auto 32px;
  width: 100%;
  max-width: 1160px;
`;

export const TableHeader = styled.div`
  display: none;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
    align-items: center;
    padding: 16px 12px;

    h3 {
      color: #2d2d2d;
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0.48px;
    }

    button:last-child {
      margin-left: auto;
    }
  }
`;

export const TableItems = styled.div`
  > div:nth-child(odd) {
    border-radius: 10px;
    background: #e8e8e8;
  }
  > div:nth-child(even) {
    border-radius: 10px;
    background: #f7f7f7;
  }

  > div + div {
    margin-top: 16px;
  }
`;

export const TableItem = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 16px 12px;

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

  > div:last-child {
    display: flex;
    justify-content: end;
  }
`;

export const TableItemMobile = styled.div`
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;

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

    span {
      color: #e42e30;
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
    }
  }

  > div:last-child {
  }
`;
