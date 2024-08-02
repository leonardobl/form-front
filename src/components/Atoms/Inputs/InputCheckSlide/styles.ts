import styled from "styled-components";

export const CustomLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  height: 14px;

  > span {
    transition: all 0.15s ease-in-out;
    display: block;
    color: #9d9d9d;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin-left: 30px;
  }

  &::before {
    transition: all 0.15s ease-in-out;
    content: "";
    display: block;
    width: 30px;
    height: 14px;
    border: 3px solid #9d9d9d;
    border-radius: 10px;
    position: absolute;
  }

  &::after {
    transition: all 0.15s ease-in-out;
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #9d9d9d;
    border-radius: 50%;
    position: absolute;
    left: 4px;
  }

  &:has(> input:checked) {
    span {
      color: #2d2d2d;
    }

    &::before {
      border: 3px solid #2d2d2d;
    }

    &::after {
      left: 19px;
      background-color: #2d2d2d;
    }
  }
`;

export const CustomInput = styled.input`
  opacity: 0;
`;
