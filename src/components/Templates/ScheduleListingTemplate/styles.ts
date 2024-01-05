import styled, { css } from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    width: ${space.medio};
    margin: 0 auto;
    padding: 180px 0;
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
`;

export const FormFilter = styled.form`
  border: 1px solid #266bf0;
  padding: 35px 0;
  margin-bottom: 80px;
`;

export const BorderContainer = styled.div`
  padding: 0 60px;
  border-bottom: 2px solid #cacaca;
`;

export const Grid = styled.div<{ gridtemplate: string; gap?: string }>`
  ${({ gridtemplate, gap }) => css`
    padding: 0 60px;
    display: grid;
    grid-template-columns: ${gridtemplate};
    gap: ${gap};
    padding-top: 32px;
    align-items: end;
  `}
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
`;

export const WrapperBtn = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 0 40px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 30px;
  justify-content: end;
  padding: 0 60px;
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
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.36px;
    text-transform: uppercase;

    img {
      cursor: pointer;
    }
  `}
`;
