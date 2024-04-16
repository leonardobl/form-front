import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useScheduleConfirmation } from "./useScheduleConfirmation";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
import { ISelectOptions } from "../../../types/inputs";
import { MyModal } from "../../Atoms/MyModal";

export const ScheduleConfirmationTemplate = () => {
  const {
    diasIndisponiveis,
    date,
    setDate,
    horarios,
    form,
    setForm,
    onSubmit,
    isOpen,
    setIsOpen,
    handleReagendamento,
  } = useScheduleConfirmation();

  return (
    <S.Container onSubmit={onSubmit}>
      <Text>
        Selecione as datas e horários{" "}
        <span className="textStrong">disponíveis</span>.
      </Text>

      <S.Grid>
        <div>
          <InputDate
            placeholderText="___/___/___"
            showIcon
            label="Data"
            minDate={new Date()}
            required
            selected={date}
            excludeDates={diasIndisponiveis}
            onChange={(e) => {
              setDate(e);
              setForm((prev) => ({
                ...prev,
                diaAgendado: reverseToIsoDate(e?.toLocaleDateString()),
              }));
            }}
          />
        </div>
        <div>
          <SimpleSelect
            isDisabled={!date}
            label="Horário"
            required
            options={horarios}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({ ...prev, horaAgendada: e?.value }))
            }
            value={
              horarios.find((item) => item?.value === form?.horaAgendada) ||
              null
            }
          />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Grid>

      <MyModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
            date?.toLocaleDateString()
          )} às ${form.horaAgendada}? `}</p>
          <Button onClick={handleReagendamento}>Confirmar</Button>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
