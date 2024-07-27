import styled from "styled-components";
import { ITableHeaderProps } from ".";

export const CustomTableHeader = styled.div<ITableHeaderProps>`
  display: none;

  h2 {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.48px;
  }

  @media (min-width: 640px) {
    display: grid;
    align-items: center;
    grid-template-columns: ${(props) => props.columns};
    padding: 16px;
  }
`;
