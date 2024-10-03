import styled from "styled-components";

export const CustomContainer = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;
