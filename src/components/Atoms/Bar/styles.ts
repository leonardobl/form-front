import styled, { css } from "styled-components";

export const MyBar = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    /* background: #12d1a7; */
    background: ${colors.main};
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.16);
    height: 90px;
    padding: 0 42px;
    display: flex;
    align-items: center;
  `}
`;
