import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FormLogin } from ".";
import { renderComponente } from "../../../utils/renderComponente";
import userEvent from "@testing-library/user-event";

const mockSubmit = jest.fn();

const dataUser = {
  login: "493.280.120-31",
  password: "teste123",
};

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

  test("Deve apresentar mensagem de erro ao submeter form sem preencher", async () => {
    renderComponente(<FormLogin onSubmitForm={mockSubmit} />);

    userEvent.click(screen.getByRole("button", { name: "Entrar" }));

    const mensagens = await screen.findAllByText("Campo obrigatorio");

    for (let msg of mensagens) {
      expect(msg).toBeVisible();
    }
  });

  test("Deve submeter o form com os dados preenchidos", async () => {
    renderComponente(<FormLogin onSubmitForm={mockSubmit} />);

    userEvent.type(screen.getByLabelText(/CPF\/ CNPJ/i), dataUser.login);
    userEvent.type(screen.getByLabelText(/senha/i), dataUser.password);
    fireEvent.submit(screen.getByRole("button", { name: "Entrar" }));

    const mensagens = screen.queryAllByText("Campo obrigatorio");

    expect(mensagens).toHaveLength(0);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        {
          cpfCNPJ: dataUser.login,
          senha: dataUser.password,
        },
        expect.anything()
      );
    });
  });
});
