import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FormResidenceScheduling } from ".";
import userEvent from "@testing-library/user-event";
import { MockLojas } from "../../../mocks/mock.lojas";

const MockSubmit = jest.fn();

jest.mock("./useFormResidenceScheduling", () => {
  const original = jest.requireActual("./useFormResidenceScheduling");

  return {
    _esModule: true,
    useFormResidenceScheduling: () => ({
      ...original.useFormResidenceScheduling(),
      cidadesOptions: MockLojas,
    }),
  };
});

describe("<FormResidenceScheduling />", () => {
  test("Deve apresentar mensagem de erro ao submeter sem preencher a cidade", async () => {
    render(<FormResidenceScheduling onSubmitForm={MockSubmit} />);

    fireEvent.submit(screen.getByRole("button", { name: "Avançar" }));

    const MessageError = await screen.findByText(
      "Você precisa selecionar uma cidade"
    );

    expect(MessageError).toBeVisible();
  });

  test("Deve submeter o form com os dados preenchidos", async () => {
    render(<FormResidenceScheduling onSubmitForm={MockSubmit} />);

    userEvent.click(screen.getByRole("combobox", { name: "Cidade *" }));
    userEvent.click(await screen.findByText(MockLojas[0].label));
    fireEvent.submit(screen.getByRole("button", { name: "Avançar" }));

    const MessageError = screen.queryByText(
      "Você precisa selecionar uma cidade"
    );

    expect(MessageError).not.toBeInTheDocument();

    await waitFor(() => {
      expect(MockSubmit).toHaveBeenCalledWith(
        { uuidDelivery: MockLojas[0].label },
        expect.anything()
      );
    });
  });
});
