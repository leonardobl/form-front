import { render, screen } from "@testing-library/react";
import { renderComponente } from "../../../utils/renderComponente";
import { LoginRegisterTemplate } from ".";
import userEvent from "@testing-library/user-event";

describe("<LoginRegisterTemplate />", () => {
  test("Deve apresentar 2 botões", () => {
    renderComponente(<LoginRegisterTemplate />);

    const buttonLogin = screen.getByRole("button", { name: "Login" });
    const buttonCadastro = screen.getByRole("button", { name: "Cadastro" });

    expect(buttonLogin).toBeVisible();
    expect(buttonCadastro).toBeVisible();
  });

  test("Deve direcionar para '/login'", () => {
    const { history } = renderComponente(<LoginRegisterTemplate />);

    const buttonLogin = screen.getByRole("button", { name: "Login" });

    userEvent.click(buttonLogin);

    expect(history.location.pathname).toMatch(/\/login/);
  });

  test("Deve direcionar para '/cadastro-usuario'", () => {
    const { history } = renderComponente(<LoginRegisterTemplate />);

    const buttonLogin = screen.getByRole("button", { name: "Cadastro" });

    userEvent.click(buttonLogin);

    expect(history.location.pathname).toMatch(/\/cadastro-usuario/);
  });
});
