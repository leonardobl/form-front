import styled from "styled-components";

export const Label = styled.label`
  padding: 0 20px;
  width: 278px;
  height: 56px;
  border-radius: 10px;
  background: #e8e8e8;
  box-shadow: 0px 4px 4px 0px #00000040;

  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:has(> input:checked) {
    background: #9d9d9d;
  }

  &:has(> input:checked) > div p {
    color: #ffffff;
  }

  &:has(> input:checked) img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(7500%)
      hue-rotate(64deg) brightness(104%) contrast(100%);
  }

  @media (max-width: 500px) {
    width: 320px;
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
  margin: 0 auto;
`;

export const Icon = styled.img`
  filter: brightness(0) saturate(100%) invert(68%) sepia(0%) saturate(187%)
    hue-rotate(177deg) brightness(94%) contrast(83%);
`;

export const TextIcon = styled.p`
  font-family: Mulish;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #9d9d9d;
  text-align: center;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;
export const Value = styled.p`
  color: #26be51;
  text-align: center;
  font-family: "Lato";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
`;
