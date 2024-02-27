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

    .icon {
      -webkit-filter: brightness(0) invert(1);
      filter: brightness(0) invert(1);
    }
  }

  img {
    width: 24px;
    display: block;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const WrapperContent = styled.div`
  display: flex;
  gap: 0 6px;
  align-items: center;
`;
