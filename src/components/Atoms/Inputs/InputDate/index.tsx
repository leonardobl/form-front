import React, { useState } from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import { registerLocale } from "react-datepicker";

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
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 12.4883H4.5V9.36624H7.5V12.4883ZM13.5 9.36624H10.5V12.4883H13.5V9.36624ZM19.5 9.36624H16.5V12.4883H19.5V9.36624ZM7.5 14.0494H4.5V17.1714H7.5V14.0494ZM13.5 14.0494H10.5V17.1714H13.5V14.0494ZM19.5 14.0494H16.5V17.1714H19.5V14.0494ZM7.5 18.7325H4.5V21.8546H7.5V18.7325ZM13.5 18.7325H10.5V21.8546H13.5V18.7325ZM6 4.68312C6.82837 4.68312 7.5 3.9849 7.5 3.12208V1.56104C7.5 0.698175 6.82837 0 6 0C5.17163 0 4.5 0.698224 4.5 1.56104V3.12208C4.5 3.98494 5.17163 4.68312 6 4.68312ZM24 3.12208V24.9766H0V3.12208H3.75C3.75 4.4133 4.75927 5.46364 6 5.46364C7.24073 5.46364 8.25 4.4133 8.25 3.12208H15.75C15.75 4.4133 16.7593 5.46364 18 5.46364C19.2407 5.46364 20.25 4.4133 20.25 3.12208H24ZM22.5 7.8052H1.5V23.4156H22.5V7.8052ZM18 4.68312C18.8291 4.68312 19.5 3.9849 19.5 3.12208V1.56104C19.5 0.698175 18.8291 0 18 0C17.1709 0 16.5 0.698224 16.5 1.56104V3.12208C16.5 3.98494 17.1709 4.68312 18 4.68312Z"
              fill="#828D8A"
            />
          </svg>
        }
      />
    </S.Container>
  );
};
