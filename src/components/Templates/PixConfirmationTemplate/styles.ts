import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 0;

  > h1 {
    text-align: center;
  }

  > button {
    width: fit-content;
    padding: 0 16px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
`;
