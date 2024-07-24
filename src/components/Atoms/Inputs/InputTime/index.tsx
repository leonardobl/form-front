import TimePicker, { ITimePickerProps } from "react-times";
import "react-times/css/material/default.css";
import "react-times/css/classic/default.css";
import * as S from "./styles";

export const InputTime = (props: ITimePickerProps) => {
  return (
    <S.Container>
      <img src="/assets/svgs/icon-clock-gray.svg" alt="icone relogio" />
      <TimePicker
        showTimezone
        withoutIcon={true}
        time="14:05"
        theme="classic"
        timeMode="24"
        timezone="America/Fortaleza"
        timeConfig={{
          from: "08:00 PM",
          to: "08:00 AM",
          step: 0.25,
          unit: "hour",
        }}
        {...props}
      />
    </S.Container>
  );
};
