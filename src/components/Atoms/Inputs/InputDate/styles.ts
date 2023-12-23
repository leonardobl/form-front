import styled from "styled-components";

export const Container = styled.div`
  .react-datepicker-wrapper {
    width: 400px;
  }

  .react-datepicker__input-container {
    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid red;
      padding: 0 10px;

      font-family: "Roboto";
      font-size: 16px;
      border: 1px solid rgba(38, 107, 240, 1);

      &:focus {
        outline: 1px solid rgba(38, 107, 240, 1);
      }
    }
  }
`;
