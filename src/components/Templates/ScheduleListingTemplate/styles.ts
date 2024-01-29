import styled, { css } from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    width: 100%;
    max-width: ${space.medio};
    margin: 0 auto;
    padding: 180px 0;

    @media (max-width: 500px) {
      padding: 40px 20px;
    }
  `}
`;

export const Title = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.96px;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const FormFilter = styled.form`
  border: 1px solid #266bf0;
  padding: 35px 0;
  margin-bottom: 80px;

  @media (max-width: 500px) {
    padding: 16px 20px;
  }
`;

export const BorderContainer = styled.div`
  padding: 0 60px;
  border-bottom: 2px solid #cacaca;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Grid1 = styled.div`
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    "loja loja cidade cidade data data placa placa renavam renavam"
    "status status status status status status clean clean filtrar filtrar";
  gap: 24px;
  padding-top: 32px;
  align-items: end;

  > :nth-child(1) {
    grid-area: loja;
  }
  > :nth-child(2) {
    grid-area: cidade;
  }
  > :nth-child(3) {
    grid-area: data;
  }
  > :nth-child(4) {
    grid-area: placa;
  }
  > :nth-child(5) {
    grid-area: renavam;
  }
  > :nth-child(6) {
    grid-area: status;
  }
  > :nth-child(7) {
    grid-area: clean;
  }
  > :nth-child(8) {
    grid-area: filtrar;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 6fr);
    grid-template-areas:
      "data data" "loja loja" "cidade cidade" "placa placa" "renavam renavam"
      "status status" "clean filtrar";

    padding: 0;
    gap: 24px 0;

    align-items: center;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
    "data data status status status placa placa renavam renavam"
    ". . . . . . . clean filtrar";
  gap: 24px;
  padding-top: 32px;
  padding: 32px 60px 0;
  align-items: end;

  > :nth-child(1) {
    grid-area: data;
  }
  > :nth-child(2) {
    grid-area: status;
  }
  > :nth-child(3) {
    grid-area: placa;
  }
  > :nth-child(4) {
    grid-area: renavam;
  }

  > :nth-child(7) {
    grid-area: clean;
  }
  > :nth-child(8) {
    grid-area: filtrar;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 6fr);
    grid-template-areas:
      "data data" "status status" "placa placa" "renavam renavam"
      "clean filtrar";
    gap: 24px 0;
    padding: 0;
  }
`;

export const ItemListagemMobile = styled.div`
  border-radius: 5px;
  background: #f7f7f7;
  padding: 15px 8px;
  display: flex;
  gap: 16px;

  & + div {
    margin-top: 24px;
  }

  > div {
    flex: 1;

    h4 {
      color: #595959;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
      font-family: "Roboto";

      span {
        margin-left: 10px;
      }
    }
  }
`;

export const ButtonStart = styled.button`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.24px;

  border-radius: 5px;
  background: #266bf0;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0 6px;
`;

export const TitleFilter = styled.h2`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 28px;
`;

export const SubTitle = styled.p`
  color: #2d2d2d;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.72px;
  margin-bottom: 14px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TitleGrid = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.48px;
`;

export const GridTitles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.8fr 1.2fr 1.5fr 1fr 0.1fr;
  padding: 18px;
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.8fr 1.2fr 1.5fr 1fr 0.1fr;
  padding: 18px;
  align-items: center;
  border-radius: 5px;
  background: #f7f7f7;

  &:hover {
    background: ${() => darken(0.05, "#f7f7f7")};
  }

  + div {
    margin-top: 32px;
  }
`;

export const ItemGrid = styled.p<{ $color?: string }>`
  ${({ $color }) => css`
    color: ${$color ? $color : "#595959"};
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: ${$color ? 700 : 400};
    line-height: 24px;
    letter-spacing: 0.36px;
    text-transform: uppercase;

    img {
      cursor: pointer;
    }
  `}
`;
