import { render, screen } from "@testing-library/react";
import { FormStoreScheduling } from ".";
import userEvent from "@testing-library/user-event";

jest.mock("./useFormStoreScheduling", () => ({
  useFormStoreScheduling: () => ({
    lojasOptions: [
      { label: "Loja A", value: "A" },
      { label: "Loja B", value: "B" },
      { label: "Loja C", value: "C" },
    ],
    handleSubmit: jest.fn(),
    errors: { uuidLoja: { message: "uuidLoja?.message" } },
    Controller: ({ render, control, name }) =>
      render({ field: { onChange: jest.fn(), value: "" } }),
  }),
}));

const onSubmit = jest.fn();

test("Deve submeter o form com o select preenchido", async () => {
  render(<FormStoreScheduling onSubmitForm={onSubmit} />);

  const Select = screen.getByRole("combobox", { name: "Loja *" });

  const ButtonSubmit = screen.getByRole("button", { name: "Avançar" });

  await userEvent.click(ButtonSubmit);

  const msg = await screen.findByText("Você precisa selecionar uma loja");

  screen.debug();
  // userEvent.click(ButtonSubmit);
});
