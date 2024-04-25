import React, { ReactElement } from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "../Global/Theme";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

export const renderComponent = (children: ReactElement) => {
  const history = createMemoryHistory();

  render(
    <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </ThemeProvider>
  );

  return { history };
};
