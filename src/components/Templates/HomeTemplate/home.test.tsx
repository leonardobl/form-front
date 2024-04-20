import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Home } from "../../Pages/home";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../../Global/Theme";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ContextProvider } from "../../../context/Context";
import { BrowserRouter } from "react-router-dom";

function customWrapper({ children }: { children: ReactJSXElement }) {
  return (
    <>
      <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
        <ContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

test("Deve exibir 2 botoes", () => {
  render(<Home />, { wrapper: customWrapper });

  const storeButton = screen.getByRole("button", { name: "Loja Física" });
  const residenceButton = screen.getByRole("button", {
    name: "Domicílio",
    exact: true,
  });

  expect(storeButton).toBeInTheDocument();
  expect(residenceButton).toBeInTheDocument();
});

test("Deve direcionar para '/loja'", async () => {
  render(<Home />, { wrapper: customWrapper });

  const storeButton = screen.getByRole("button", { name: "Loja Física" });
  user.click(storeButton);

  const title = screen.getByText("Loja Física");

  console.log(title);

  expect(title).toBeInTheDocument();
});
