import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: block;

  img {
    position: absolute;
    right: 16px;
    top: 12px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;

  border-radius: 10px;
  /* border: 1px solid #50d05d; */
  background: #e1f2ee;

  display: flex;
  padding: 0 50px 0 20px;

  align-items: center;
  color: #20332f;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    /* outline: 1px solid #50d05d; */
    outline: none;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    width: 100%;
    font-size: 16px;
  }
`;
