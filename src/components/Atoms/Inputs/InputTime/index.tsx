import TimePicker, { ITimePickerProps } from "react-times";
import "react-times/css/material/default.css";
import "react-times/css/classic/default.css";
import * as S from "./styles";

export const InputTime = ({ placeholder, ...rest }: ITimePickerProps) => {
  return (
    <S.Container {...rest}>
      {rest.label && (
        <p id="label">
          {rest.label}
          {rest.required && <span>*</span>}
        </p>
      )}
      <img src="/assets/svgs/icon-clock-gray.svg" alt="icone relogio" />
      <TimePicker
        showTimezone
        withoutIcon={true}
        theme="classic"
        timeMode="24"
        timeConfig={{
          from: "08:00 PM",
          to: "08:00 AM",
          step: 0.25,
          unit: "hour",
        }}
        {...rest}
      />
      {!rest.time && placeholder && <span id="placeholder">{placeholder}</span>}
    </S.Container>
  );
};
