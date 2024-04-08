import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useScheduleConfirmation } from "./useScheduleConfirmation";

export const ScheduleConfirmationTemplate = () => {
  const { diasIndisponiveis, date, setDate, horarios } =
    useScheduleConfirmation();

  return (
    <S.Container>
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
            onChange={setDate}
          />
        </div>
        <div>
          <SimpleSelect
            isDisabled={!date}
            label="Horário"
            required
            options={horarios}
          />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Grid>
    </S.Container>
  );
};
