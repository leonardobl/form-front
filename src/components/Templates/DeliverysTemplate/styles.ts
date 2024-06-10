import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    width: 100%;
    padding: ${padding.primary} 20px;

    > h1 {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const FormFilter = styled.form`
  max-width: 49.1875rem;
  width: 100%;

  border-radius: 0.625rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: 500px) {
    border: none;
  }
`;

export const HeaderFormFilter = styled.div`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: ${(props) => props.theme.colors.main};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Mulish;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  text-transform: uppercase;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const GridFormFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  grid-template-areas: "data cidade button1 button2";
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
  }

  > :nth-child(1) {
    grid-area: data;
  }

  > :nth-child(2) {
    grid-area: cidade;
  }
  > :nth-child(3) {
    grid-area: button1;

    button {
      color: rgba(32, 51, 47, 0.56);
      font-family: Mulish;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem; /* 125% */
      background-color: transparent;
      margin: 0 auto;
      display: block;
    }
  }
  > :nth-child(4) {
    grid-area: button2;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "data cidade" "button1 button2";
    gap: 1.5rem 1rem;
    padding: 0;
  }
`;

export const List = styled.div`
  width: 100%;
  max-width: 72.5625rem;
  margin: 0 auto;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1.4fr 1fr 1fr 0.1fr;
  padding: 1rem 2rem;

  > button {
    color: #20332f;
    text-align: center;
    font-family: Mulish;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.42rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ListBody = styled.div`
  > :nth-child(odd) {
    background-color: #e8e8e8;
  }
  > :nth-child(even) {
    background-color: #f7f7f7;
  }

  > div + div {
    margin-top: 1rem;
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1.4fr 1fr 1fr 0.1fr;
  padding: 1rem 2rem;
  border-radius: 0.625rem;

  p {
    color: #595959;
    font-family: Mulish;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 200% */
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
  }
`;

export const ListItemMobile = styled.div`
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    p:first-child {
      margin-bottom: 16px;
      color: #595959;
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 200% */
      letter-spacing: 0.36px;
      text-transform: uppercase;

      span {
        margin-left: 12px;
      }
    }
    p:last-child {
      color: #2d2d2d;
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px; /* 200% */
      letter-spacing: 0.36px;
      text-transform: uppercase;
    }
  }
`;

export const CloudDownloadIcon = `
  margin-right: 1rem;
`;

export const Button = styled.div`
  color: rgba(32, 51, 47, 0.56);
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
  background-color: transparent;
  margin: 0 auto;
  display: block;
`;

export const ActionsButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 72.5625rem;
  margin: 0 auto 1rem;

  @media (max-width: 500px) {
    justify-content: center;
    gap: 0 24px;
  }
`;

export const ButtonFilter = styled.button`
  color: #2d2d2d;
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  gap: 0 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
