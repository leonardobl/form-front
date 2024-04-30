import { FormStoreRescheduling } from "./index";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  logRoles,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponente } from "../../../utils/renderComponente";
import { MockLojas } from "../../../Mocks/MockLojas";
import { MockHorarios } from "../../../Mocks/MockHorarios";
import { MockDiasIndisponiveis } from "../../../Mocks/MockDiasIndisponiveis";

import { useFormStoreRescheduling } from "./useFormStoreRescheduling";
import { reverseToIsoDate } from "../../../utils/dateTransform";

jest.mock("./useFormStoreRescheduling", () => {
  const hook = jest.requireActual("./useFormStoreRescheduling");

  return {
    _esModule: true,
    ...hook,
    useFormStoreRescheduling: () => {
      return {
        ...hook.useFormStoreRescheduling(),
        lojasOptions: MockLojas,
        horariosOptions: MockHorarios,
        diasIndisponiveis: [],
        submitForm: jest.fn(),
      };
    },
  };
});

describe("<FormStoreRescheduling />", () => {
  test("Deve apresentar mensagem de erro ao tentar submeter o form sem preeencher", async () => {
    const mockSubmitForm = jest.fn();

    renderComponente(<FormStoreRescheduling onSubmitForm={mockSubmitForm} />);

    await fireEvent.submit(screen.getByRole("button", { name: "Avançar" }));

    const msgloja = await screen.findByText(
      "Você precisa selecionar uma cidade"
    );

    const msgdia = await screen.findByText("Você precisa selecionar um dia");

    const msghorario = await screen.findByText(
      "Você precisa selecionar um horario"
    );

    expect(msgloja).toBeVisible();
    expect(msgdia).toBeVisible();
    expect(msghorario).toBeVisible();

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("Deve submeter o formulario ao preencher os dados e click no botão avançar", async () => {
    const mockSubmitForm = jest.fn();

    renderComponente(<FormStoreRescheduling onSubmitForm={mockSubmitForm} />);

    userEvent.click(screen.getByRole("combobox", { name: "Loja *" }));

    userEvent.click(screen.getByText(MockLojas[0].value));

    fireEvent.focus(screen.getByRole("textbox", { name: "Data *" }));

    userEvent.click(await screen.findByText(new Date().getDate()));

    userEvent.click(
      await screen.findByRole("combobox", {
        name: "Horário *",
      })
    );

    userEvent.click(screen.getByText(MockHorarios[0].value));

    fireEvent.submit(screen.getByRole("button", { name: "Avançar" }));

    const msgloja = screen.queryByText("Você precisa selecionar uma cidade");

    const msgdia = screen.queryByText("Você precisa selecionar um dia");

    const msghorario = screen.queryByText("Você precisa selecionar um horario");

    expect(msgloja).not.toBeInTheDocument();
    expect(msgdia).not.toBeInTheDocument();
    expect(msghorario).not.toBeInTheDocument();

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith(
        {
          diaAgendado: reverseToIsoDate(new Date().toLocaleDateString()),
          horaAgendada: MockHorarios[0].value,
          uuidLoja: MockLojas[0].value,
        },
        expect.anything()
      );
    });
  });
});
