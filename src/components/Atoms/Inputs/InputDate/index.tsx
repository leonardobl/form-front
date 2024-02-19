import React, { useState } from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import ReactDatePicker, { registerLocale } from "react-datepicker";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container>
      {props.label && (
        <S.Label>
          {props.label}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      <DatePicker
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
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_265_3920)">
              <path
                d="M11 9.38235C14.5588 9.38235 18.1176 9.38235 21.6765 9.38235C22 9.38235 22 9.38235 22 9.70588C22 12.9412 22 16.3382 22 19.5735C22 20.8676 21.0294 22 19.5735 22C13.75 22 8.08823 22 2.26471 22C0.970588 22 0 21.0294 0 19.7353C0 16.5 0 13.1029 0 9.86765C0 9.54412 0 9.54412 0.323529 9.54412C3.88235 9.38235 7.44118 9.38235 11 9.38235Z"
                fill="#00186D"
              />
              <path
                d="M16.5 2.42647C17.6324 2.42647 18.6029 2.42647 19.7353 2.42647C21.0294 2.42647 22 3.39706 22 4.69118C22 5.66177 22 6.63236 22 7.60294C22 7.76471 22 7.92647 21.6765 7.92647C14.5588 7.92647 7.44118 7.92647 0.161765 7.92647C0 7.92647 0 7.76471 0 7.60294C0 6.63236 0 5.5 0 4.52942C0 3.39706 0.970588 2.26471 2.26471 2.26471C3.39706 2.26471 4.52941 2.26471 5.5 2.26471C5.5 3.2353 5.5 4.36765 5.5 5.33824C5.5 5.82353 5.82353 6.14706 6.30882 6.14706C6.79412 6.14706 7.11765 5.82353 7.11765 5.33824C7.11765 4.36765 7.11765 3.2353 7.11765 2.26471C9.70588 2.26471 12.2941 2.26471 14.8824 2.26471C14.8824 3.2353 14.8824 4.20589 14.8824 5.33824C14.8824 5.5 14.8824 5.66177 15.0441 5.82353C15.2059 6.14706 15.5294 6.14706 15.8529 6.14706C16.1765 5.9853 16.3382 5.82353 16.3382 5.33824C16.5 4.36765 16.5 3.39706 16.5 2.42647Z"
                fill="#00186D"
              />
              <path
                d="M5.5 2.42647C5.5 1.94118 5.5 1.29412 5.5 0.808824C5.5 0.323529 5.82353 0 6.30882 0C6.79412 0 7.11765 0.323529 7.11765 0.808824C7.11765 1.29412 7.11765 1.94118 7.11765 2.42647C6.63235 2.42647 5.98529 2.42647 5.5 2.42647Z"
                fill="#00186D"
              />
              <path
                d="M14.8823 2.42647C14.8823 1.94118 14.8823 1.45588 14.8823 0.970588C14.8823 0.323529 15.2059 0 15.6911 0C16.1764 0 16.5 0.323529 16.5 0.808824C16.5 1.29412 16.5 1.77941 16.5 2.26471C16.0147 2.42647 15.5294 2.42647 14.8823 2.42647Z"
                fill="#00186D"
              />
            </g>
            <defs>
              <clipPath id="clip0_265_3920">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
        {...props}
      />
    </S.Container>
  );
};
