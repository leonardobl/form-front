import { screen } from "@testing-library/react";
import { renderComponent } from "../../../utils/renderComponent";
import { Store } from "../../Pages/Store";

jest.mock("./useStore", () => ({
  useStore: () => ({
    lojasOptions: [],
    date: new Date(),
    form: {},
    setForm: jest.fn(),
    reagendamentoForm: {},
    setReagendamentoForm: jest.fn(),
    setDate: jest.fn(),
    diasIndisponiveis: [],
    isLoading: false,
    horariosOptions: [],
    modalIsOpen: false,
    handleSubmit: jest.fn(),
    handleReagendamento: jest.fn(),
    sessionAgendamento: {},
    setModalIsOpen: jest.fn(),
  }),
}));

test("Deve apresentar um input select", () => {
  renderComponent(<Store />);

  const input = screen.getByRole("combobox", { name: "Loja *" });

  expect(input).toBeInTheDocument();
});
