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

// test("Deve direcionar para '/loja'", async () => {
//   render(<Home />, { wrapper: customWrapper });

//   const storeButton = screen.getByRole("button", { name: "Loja Física" });
//   user.click(storeButton);

//   const title = screen.getByText("Loja Física");

//   console.log(title);

//   expect(title).toBeInTheDocument();
// });
