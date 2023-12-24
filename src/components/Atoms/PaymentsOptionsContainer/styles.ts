import styled from "styled-components";

export const Label = styled.label`
  padding: 0 20px;
  width: 400px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #266bf0;
  background: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:has(> input:checked) {
    outline: 2px solid #266bf0;
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

export const WrapperLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Icon = styled.img`
  margin-top: -4px;
`;

export const TextIcon = styled.p`
  color: #2d2d2d;
  text-align: center;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;
export const Value = styled.p`
  color: #26be51;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
`;
