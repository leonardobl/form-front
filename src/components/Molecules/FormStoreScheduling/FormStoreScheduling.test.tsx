import { render, screen, act, waitFor } from "@testing-library/react";
import { FormStoreScheduling } from ".";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockLojas } from "../../../Mocks/MockLojas";

const mockSubmit = jest.fn();

jest.mock("./useFormStoreScheduling", () => {
  const originalModule = jest.requireActual("./useFormStoreScheduling");

  return {
    __esModule: true,
    ...originalModule,
    useFormStoreScheduling: () => ({
      ...originalModule.useFormStoreScheduling(),
      lojasOptions: MockLojas,
    }),
  };
});

describe("<FormStoreScheduling/>", () => {
  test("Não deve submeter o form e exibir msg erro", async () => {
    render(<FormStoreScheduling onSubmitForm={mockSubmit} />);

    fireEvent.submit(await screen.findByRole("button", { name: "Avançar" }));

    const msg = await screen.findByText("Você precisa selecionar uma loja");

    expect(msg).toBeVisible();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("Deve submeter o form com o select preenchido", async () => {
    render(<FormStoreScheduling onSubmitForm={mockSubmit} />);

    userEvent.click(await screen.findByRole("combobox", { name: "Loja *" }));
    userEvent.click(await screen.findByText(MockLojas[0].value));
    fireEvent.submit(await screen.findByRole("button", { name: "Avançar" }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        { uuidLoja: MockLojas[0].value },
        expect.anything()
      );
    });
  });
});
