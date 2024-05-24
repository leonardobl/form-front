import { render, screen } from "@testing-library/react";
import { Home } from "../../Pages/home";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../../Global/Theme";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

function renderHome() {
  const history = createMemoryHistory();

  render(
    <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    </ThemeProvider>
  );

  return { history };
}

test("Deve exibir 2 botoes", () => {
  renderHome();

  const storeButton = screen.getByRole("button", { name: "Loja Física" });
  const residenceButton = screen.getByRole("button", {
    name: "Domicílio",
  });

  expect(storeButton).toBeInTheDocument();
  expect(residenceButton).toBeInTheDocument();
});

test("Deve direcionar para '/agendamento/loja'", async () => {
  const { history } = renderHome();

  const storeButton = screen.getByRole("button", { name: "Loja Física" });

  userEvent.click(storeButton);

  expect(history.location.pathname).toEqual("/agendamento/loja");
});

test("Deve direcionar para '/agendamento/domicilio'", () => {
  const { history } = renderHome();

  const residenceButton = screen.getByRole("button", {
    name: "Domicílio",
  });

  userEvent.click(residenceButton);

  expect(history.location.pathname).toEqual("/agendamento/domicilio");
});
