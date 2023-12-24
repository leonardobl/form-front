import styled from "styled-components";

export const container = styled.div`
  width: 400px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #266bf0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Text = styled.p`
  color: #26be51;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
`;

export const WraperLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Icon = styled.img`
  margin-top: -2px;
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
