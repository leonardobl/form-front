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
  background: ${(props) => props.theme.colors.main};
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
  border: 1px solid ${(props) => props.theme.colors.main};
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
  grid-template-columns: repeat(5, 1fr);
  gap: 36px 16px;
  grid-template-areas: "dataI dataF cidade tipo renavam" "placa chassi chassi cpf cpf" "nome nome nome status status" ". . . button1 button2";

  > :nth-child(1) {
    grid-area: dataI;
  }

  > :nth-child(2) {
    grid-area: dataF;
  }

  > :nth-child(3) {
    grid-area: cidade;
  }

  > :nth-child(4) {
    grid-area: tipo;
  }

  > :nth-child(5) {
    grid-area: renavam;
  }

  > :nth-child(6) {
    grid-area: placa;
  }

  > :nth-child(7) {
    grid-area: chassi;
  }

  > :nth-child(8) {
    grid-area: cpf;
  }

  > :nth-child(9) {
    grid-area: nome;
  }

  > :nth-child(10) {
    grid-area: status;
  }

  > :nth-child(11) {
    grid-area: button1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;

    button {
      color: rgba(32, 51, 47, 0.56);
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      margin-right: -50px;
      line-height: 20px; /* 125% */
      background-color: transparent;
    }
  }

  > :nth-child(12) {
    grid-area: button2;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  &[data-client="true"] {
    grid-template-areas: "dataI dataF cidade tipo renavam" "placa chassi chassi status status" ". . . button1 button2";

    > :nth-child(8) {
      display: none;
    }

    > :nth-child(9) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    grid-template-areas: "dataI dataF" "cidade tipo" "placa placa" "renavam renavam" "chassi chassi" "nome nome" "cpf cpf" "status status" "button1 button2";

    &[data-client="true"] {
      grid-template-areas: "dataI dataF" "cidade tipo" "placa placa" "renavam renavam" "chassi chassi" "status status" "button1 button2";
    }

    > :nth-child(11) {
      justify-content: center;

      button {
        margin-right: 0;
      }
    }

    > :nth-child(12) {
      justify-content: center;
    }
  }
`;

export const List = styled.div`
  max-width: ${pxToRem(1160)};
  margin: 0 auto 48px;

  > :not(:first-child):nth-child(even) {
    background: #e8e8e8;
  }

  > :not(:first-child):nth-child(odd) {
    background: #f7f7f7;
  }
`;

export const ListTitles = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 0.8fr 1.5fr 1fr 1.2fr 1.4fr 0.3fr;
  width: 100%;
  padding: 18px 16px;

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
  grid-template-columns: 0.6fr 1.2fr 0.8fr 1.5fr 1fr 1.2fr 1.4fr 0.3fr;
  width: 100%;
  padding: 18px 16px;
  border-radius: 10px;
  align-items: center;

  & + div {
    margin-top: 1rem;
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

export const WrapperActions = styled.div`
  > img {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const formModal = styled.form`
  width: 506px;
  height: fit-content;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px 48px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 auto 32px;
  max-width: 1200px;
  width: 100%;

  gap: 32px;

  p {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }

  @media (max-width: 500px) {
    display: block;

    p:nth-child(2) {
      margin-top: 10px;
    }
  }
`;


export const HeaderModal = styled.div`
  padding: 5px 24px;

  > p {
    text-align: start;
  }
`;

export const WrapperButtonClose = styled.div`
  display: flex;
  justify-content: end;

  button {
    color: #2d2d2d;
    font-family: Mulish;
    background-color: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */
  }
`;

export const WrapperText = styled.div`
  padding: 24px;

  > h4 {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    margin-bottom: 10px;
  }

  > p {
    color: #7c848b;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-bottom: 24px;

    span {
      font-weight: 700;
    }
  }

  p:nth-child(4) {
    margin-bottom: 48px;
  }

  > div {
    margin-top: 1rem;
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;

  > :nth-child(1) {
    background-color: transparent;
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

