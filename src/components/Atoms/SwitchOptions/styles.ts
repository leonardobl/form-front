import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 0.8px solid #6fa599;
  background: #e1f2ee;
  width: 100%;
  max-width: 304px;
  height: 44px;
  display: flex;
  overflow: hidden;
`;

export const Label = styled.label`
  flex: 1;

  cursor: pointer;
  color: #6fa599;
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:has(input:checked) {
    background-color: #6fa599;
    overflow: hidden;
    color: #fff;
  }
`;

export const Input = styled.input`
  display: none;
`;
