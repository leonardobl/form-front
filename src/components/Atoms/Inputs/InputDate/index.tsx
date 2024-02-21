import React, { useState } from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import ReactDatePicker, { registerLocale } from "react-datepicker";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  isLoading?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  const [value, setValue] = useState<Date | null>();

  return (
    <S.Container $showIcon={props.showIcon}>
      {props.label && (
        <S.Label>
          {props.label}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      {props.isLoading && (
        <S.ImgLoad src="/assets/svgs/dots-load.svg" alt="svg load" />
      )}
      <DatePicker
        {...props}
        disabled={props.isLoading ? true : props.disabled}
        placeholderText={props.isLoading ? "" : props.placeholderText}
        // selected={value ? value : props.selected}
        onChange={(e, v) => {
          props.onChange(e, v);
          setValue(e);
        }}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="react-datepicker__navigation_wrapper">
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        dateFormat={"dd/MM/yyyy"}
        locale={"ptBR"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_582_3361)">
              <path
                d="M7.5 12H4.5V9H7.5V12ZM13.5 9H10.5V12H13.5V9ZM19.5 9H16.5V12H19.5V9ZM7.5 13.5H4.5V16.5H7.5V13.5ZM13.5 13.5H10.5V16.5H13.5V13.5ZM19.5 13.5H16.5V16.5H19.5V13.5ZM7.5 18H4.5V21H7.5V18ZM13.5 18H10.5V21H13.5V18ZM6 4.5C6.82837 4.5 7.5 3.82908 7.5 3V1.5C7.5 0.670875 6.82837 0 6 0C5.17163 0 4.5 0.670922 4.5 1.5V3C4.5 3.82912 5.17163 4.5 6 4.5ZM24 3V24H0V3H3.75C3.75 4.24073 4.75927 5.25 6 5.25C7.24073 5.25 8.25 4.24073 8.25 3H15.75C15.75 4.24073 16.7593 5.25 18 5.25C19.2407 5.25 20.25 4.24073 20.25 3H24ZM22.5 7.5H1.5V22.5H22.5V7.5ZM18 4.5C18.8291 4.5 19.5 3.82908 19.5 3V1.5C19.5 0.670875 18.8291 0 18 0C17.1709 0 16.5 0.670922 16.5 1.5V3C16.5 3.82912 17.1709 4.5 18 4.5Z"
                fill="#50D05D"
              />
            </g>
            <defs>
              <clipPath id="clip0_582_3361">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
      />
    </S.Container>
  );
};
