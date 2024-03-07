import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    > h1 {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const TitleFilter = styled.h2`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  background: #6fa599;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Filter = styled.form`
  border-radius: 10px;
  border: 1px solid #12d1a7;
  background: #fff;
  /* overflow: hidden; */
  width: 100%;
  max-width: ${pxToRem(1160)};
  margin: 0 auto 48px;

  @media (max-width: 500px) {
    border: none;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  padding: 40px;
  grid-template-columns: repeat(6, 1fr);
  gap: 36px 16px;
  grid-template-areas: "dataI dataF tipo placa renavam renavam" "chassi chassi status status button1 button2";

  > :nth-child(1) {
    grid-area: dataI;
  }

  > :nth-child(2) {
    grid-area: dataF;
  }

  > :nth-child(3) {
    grid-area: tipo;
  }

  > :nth-child(4) {
    grid-area: placa;
  }

  > :nth-child(5) {
    grid-area: renavam;
  }

  > :nth-child(6) {
    grid-area: chassi;
  }

  > :nth-child(7) {
    grid-area: status;
  }

  > :nth-child(8) {
    grid-area: button1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      color: rgba(32, 51, 47, 0.56);
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
      background-color: transparent;
      margin: 0 auto;
    }
  }

  > :nth-child(9) {
    grid-area: button2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    grid-template-areas: "dataI dataF" "tipo placa" "renavam renavam" "chassi chassi" "status status" "button1 button2";
  }
`;

export const List = styled.div`
  max-width: ${pxToRem(1160)};
  margin: 0 auto 48px;

  > :not(:first-child):nth-child(even) {
    background: #e1f2ee;
  }

  > :not(:first-child):nth-child(odd) {
    background: #f7f7f7;
  }
`;

export const ListTitles = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 1fr 1fr 0.8fr 1.2fr 1.4fr 0.2fr;
  width: 100%;
  padding: 18px 38px;

  > h3 {
    white-space: nowrap;
    color: #20332f;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.48px;
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 1fr 1fr 0.8fr 1.2fr 1.4fr 0.2fr;
  width: 100%;
  padding: 18px 38px;
  border-radius: 10px;
  align-items: center;

  > img {
    display: block;
    cursor: pointer;
    margin-left: auto;
  }

  & + div {
    margin-top: 32px;
  }

  > p {
    color: #595959;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }
`;

export const ButtonFilterMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  background: #6fa599;

  width: 5.4375rem;
  height: 1.83894rem;
  padding: 0.9375rem 0.625rem;

  gap: 0.625rem;

  color: #fff;
  text-align: center;
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0 auto 2.53rem;
`;

export const ListMobile = styled.div`
  margin: 0 auto 2rem;

  > :nth-child(even) {
    background: #e1f2ee;
  }

  > :nth-child(odd) {
    background: #f7f7f7;
  }
`;

export const ListItemMobile = styled.div`
  padding: 0.94rem 0.5rem;
  border-radius: 0.3125rem;
  display: flex;
  height: 5.875rem;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 0.8125rem;
    height: 0.625rem;
    margin-right: 1.2rem;
  }

  & + div {
    margin-top: 2rem;
  }
`;

export const ListItemMobileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;

  > p {
    color: #595959;
    font-family: Mulish;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
  }
`;
