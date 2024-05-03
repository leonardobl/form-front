import { render, screen } from "@testing-library/react";
import { FormLogin } from ".";
import { renderComponente } from "../../../utils/renderComponente";

const mockSubmit = jest.fn();

describe("<FormLogin />", () => {
  test("Deve apresentar 2 inputs text e um botão enviar", async () => {
    renderComponente(<FormLogin onSubmitForm={mockSubmit} />);

    const inputCnpjCpf = screen.getByLabelText(/CPF\/ CNPJ/i);
    const inputSenha = screen.getByLabelText(/senha/i);
    const button = screen.getByRole("button", { name: "Entrar" });

    expect(inputCnpjCpf).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
