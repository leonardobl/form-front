import styled, { css } from "styled-components";
import { ITableItemProps } from ".";

export const CustomTableItem = styled.div<ITableItemProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  padding: 16px;
  border-radius: 10px;

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

  ${({ lastElement }) =>
    lastElement &&
    css`
      :last-child {
        margin-left: auto;
      }
    `}
`;
