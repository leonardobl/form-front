import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const ScheduleConfirmationTemplate = () => {
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
            required
            onChange={() => ""}
          />
        </div>
        <div>
          <SimpleSelect label="Horário" required />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Grid>
    </S.Container>
  );
};
