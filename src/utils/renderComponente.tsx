import React from "react";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "../context/Context";
import { Router } from "react-router-dom";
import { Theme } from "../Global/Theme";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

export const renderComponente = (children: React.ReactElement) => {
  const history = createMemoryHistory();

  render(
    <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
      <ContextProvider>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );

  return { history };
};
