import { findByRole, fireEvent, screen, waitFor } from "@testing-library/react";
import { FormUserRegister } from ".";
import { renderComponente } from "../../../utils/renderComponente";
import userEvent from "@testing-library/user-event";
import { regex } from "uuidv4";

const onSubmitMock = jest.fn();

// jest.mock("./useFormUserRegister", () => {
//   const originalModule = jest.requireActual("./useFormUserRegister");

//   return {
//     __esModule: true,
//     ...originalModule,
//     useFormStoreScheduling: () => ({
//       ...originalModule.useFormUserRegister(),

//     }),
//   };
// });

const userData = {
  nome: "Leonardo Lima",
  email: "leonardo.teste@teste.com.br",
  cpfCnpj: "853.480.030-85",
  cep: "64049700",
  rua: "Rua Trinta e Um de Março",
  numero: "2020",
  bairro: "Ininga",
  uf: "PI",
  cidade: "Teresina",
  Senha: "123456",
  confirmSenha: "123456",
};

describe("<FormUserRegister />", () => {
  test("Não deve submeter o formulario sem preencher os dados", () => {
    renderComponente(<FormUserRegister onSubmitForm={onSubmitMock} />);

    const button = screen.getByRole("button", { name: "Cadastrar" });

    userEvent.click(button);

    expect(onSubmitMock).not.toBeCalled();
  });

  test("Deve submeter o formulario com preencher os dados", async () => {
    renderComponente(<FormUserRegister onSubmitForm={onSubmitMock} />);

    const nameInput = screen.getByRole("textbox", { name: "Nome Completo *" });
    userEvent.type(nameInput, userData.nome);

    const emailInput = screen.getByRole("textbox", {
      name: "E-mail",
    });
    userEvent.type(emailInput, userData.email);

    const cpfInput = screen.getByRole("textbox", {
      name: "CPF/CNPJ *",
    });
    userEvent.type(cpfInput, userData.cpfCnpj);

    const cepInput = screen.getByRole("textbox", {
      name: "Cep *",
    });
    userEvent.type(cepInput, userData.cep);

    const ruaInput = screen.getByRole("textbox", {
      name: "Endereço (Rua) *",
    });
    userEvent.type(ruaInput, userData.rua);

    const bairroInput = screen.getByRole("textbox", {
      name: "Bairro *",
    });
    userEvent.type(bairroInput, userData.bairro);

    const ufInput = screen.getByRole("combobox", {
      name: "UF *",
    });
    userEvent.click(ufInput);

    // userEvent.type(screen.getByTestId("senha"), userData.Senha);

    // userEvent.type(screen.getByTestId("confirmSenha"), userData.confirmSenha);

    // const button = screen.getByRole("button", { name: "Cadastrar" });

    // userEvent.click(button);

    // await waitFor(() => {
    //   expect(onSubmitMock).toBeCalledWith(userData, expect.anything());
    // });
  });
});
