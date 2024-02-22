import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: fit-content;

  img {
    position: absolute;
    right: 16px;
    top: 12px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 55px;

  border-radius: 25px;
  border: 1px solid #50d05d;
  background: transparent;

  display: flex;
  padding: 0 50px 0 20px;

  align-items: center;
  color: #fff;
  font-family: "Lato";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  &:focus {
    outline: 1px solid #50d05d;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    width: 100%;

    font-size: 16px;
  }
`;
