import styled from "styled-components";

export const Label = styled.label`
  padding: 0 20px;
  width: 278px;
  height: 56px;
  border-radius: 25px;
  /* border: 1px solid #50d05d; */
  background: #6fa599;
  box-shadow: 0px 4px 4px 0px #00000040;

  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:has(> input:checked) {
    /* outline: 2.5px solid #26be51; */
    background: #12d1a7;
  }

  &:has(> input:checked) > div p {
    color: #3f504c;
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
  /* margin-top: -4px; */
`;

export const TextIcon = styled.p`
  font-family: Mulish;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
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
