import styled from "styled-components";

export const Button = styled.button`
  width: 128px;
  height: 44px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #41efc9 0%, #12d1a7 100%);
  box-shadow: 0px 4px 4px 0px #00000033;

  font-family: Mulish;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;

  &:disabled {
    cursor: not-allowed;
    background: #b8b8b8;
  }
`;
