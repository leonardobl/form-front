import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Home } from "../../Pages/home";
import { renderComponente } from "../../../utils/renderComponente";

test("Deve exibir 2 botoes", () => {
  renderComponente(<Home />);

  const storeButton = screen.getByRole("button", { name: "Loja Física" });
  const residenceButton = screen.getByRole("button", {
    name: "Domicílio",
  });

  expect(storeButton).toBeInTheDocument();
  expect(residenceButton).toBeInTheDocument();
});

test("Deve direcionar para '/agendamento/loja'", async () => {
  const { history } = renderComponente(<Home />);

  const storeButton = screen.getByRole("button", { name: "Loja Física" });

  user.click(storeButton);

  expect(history.location.pathname).toEqual("/agendamento/loja");
});

test("Deve direcionar para '/agendamento/domicilio'", async () => {
  const { history } = renderComponente(<Home />);

  const residenceButton = screen.getByRole("button", {
    name: "Domicílio",
  });
  user.click(residenceButton);

  expect(history.location.pathname).toEqual("/agendamento/domicilio");
});
