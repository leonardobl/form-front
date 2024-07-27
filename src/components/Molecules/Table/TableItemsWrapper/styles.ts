import styled from "styled-components";

export const CustomTableItems = styled.div`
  > div + div {
    margin-top: 16px;
  }

  > :nth-child(odd) {
    background-color: #e8e8e8;
  }

  > :nth-child(even) {
    background-color: #f7f7f7;
  }
`;
