import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FormResidenceRescheduling } from ".";
import { MockLojas } from "../../../mocks/mock.lojas";
import { MockHorarios } from "../../../Mocks/MockHorarios";
import userEvent from "@testing-library/user-event";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
import { renderComponente } from "../../../utils/renderComponente";

jest.mock("./useFormResidenceRescheduling", () => {
  const hook = jest.requireActual("./useFormResidenceRescheduling");

  return {
    _esModule: true,
    ...hook,
    useFormResidenceRescheduling: () => {
      return {
        ...hook.useFormResidenceRescheduling(),
        cidadesOptions: MockLojas,
        horariosOptions: MockHorarios,
        diasIndisponiveis: [],
        submitForm: jest.fn(),
      };
    },
  };
});

const MockSubmitForm = jest.fn();

describe("<FormStoreRescheduling />", () => {
  test("Deve apresentar mensagem de erro ao tentar submeter o form sem preeencher", async () => {
    renderComponente(
      <FormResidenceRescheduling onSubmitForm={MockSubmitForm} />
    );

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

    expect(MockSubmitForm).not.toHaveBeenCalled();
  });

  test("Deve submeter o formulario ao preencher os dados e click no botão avançar", async () => {
    renderComponente(
      <FormResidenceRescheduling onSubmitForm={MockSubmitForm} />
    );

    userEvent.click(screen.getByRole("combobox", { name: "Cidade *" }));

    userEvent.click(screen.getByText(MockLojas[0].label));

    const inputDate = await screen.findByRole("textbox", { name: "Data *" });

    fireEvent.change(inputDate, {
      target: { value: reverseToBrDate(new Date().toLocaleDateString()) },
    });

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
      expect(MockSubmitForm).toHaveBeenCalledWith(
        {
          diaAgendado: reverseToIsoDate(new Date().toLocaleDateString()),
          horaAgendada: MockHorarios[0].value,
          uuidDelivery: MockLojas[0].value,
        },
        expect.anything()
      );
    });
  });
});
