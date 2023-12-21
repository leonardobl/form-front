import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  /* outline: none; */
  border: none
}

button {
  cursor: pointer;
}


html, body, #root {
  min-height: 100vh;
}



`;
