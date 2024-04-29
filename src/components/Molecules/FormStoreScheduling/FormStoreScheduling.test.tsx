import { getByText, render, screen } from "@testing-library/react";
import { FormStoreScheduling } from ".";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

Object.defineProperty(HTMLFormElement.prototype, "submit", {
  writable: true,
  value: jest.fn(),
});

jest.mock("./useFormStoreScheduling", () => ({
  useFormStoreScheduling: () => ({
    lojasOptions: [
      { label: "Loja A", value: "A" },
      { label: "Loja B", value: "B" },
      { label: "Loja C", value: "C" },
    ],
    handleSubmit: jest.fn(),
    errors: { uuidLoja: { message: "Você precisa selecionar uma loja" } },
    Controller: ({ render, control, name }) =>
      render({ field: { onChange: jest.fn(), value: "" } }),
  }),
}));

const mockSubmit = jest.fn();

describe("<FormStoreScheduling/>", () => {
  test("Não deve submeter o form e exibir msg erro", async () => {
    render(<FormStoreScheduling onSubmitForm={mockSubmit} />);

    const Select = screen.getByRole("combobox", { name: "Loja *" });

    const ButtonSubmit = screen.getByRole("button", { name: "Avançar" });

    await fireEvent.submit(ButtonSubmit);

    const msg = screen.getByText("Você precisa selecionar uma loja");

    expect(msg).toBeVisible();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("Deve submeter o form com o select preenchido", async () => {
    render(<FormStoreScheduling onSubmitForm={mockSubmit} />);

    const Select = screen.getByRole("combobox", { name: "Loja *" });

    await userEvent.click(Select);

    await userEvent.click(screen.getByText("Loja A"));

    const ButtonSubmit = screen.getByRole("button", { name: "Avançar" });

    await fireEvent.submit(ButtonSubmit);

    const msg = screen.getByText("Você precisa selecionar uma loja");

    expect(msg).not.toBeVisible();
    // expect(mockSubmit).not.toHaveBeenCalled();
  });
});
