/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";

import * as S from "./styles";

interface PaginationPros {
  totalPage: number;
  maxPageNumbersDisplayed?: number;
  totalRegister: number;
  actualPage: number;
  setNumberPage: any;
  className?: string;
}

export const Pagination = ({
  actualPage,
  totalPage,
  maxPageNumbersDisplayed = 10,
  setNumberPage,
  className = "pagination",
}: PaginationPros) => {
  const [selectedElement, setSelectedElement] = useState<number>(actualPage);
  const [qtdPageNumbersDisplayed, setQtdPageNumbers] = useState(
    totalPage < maxPageNumbersDisplayed ? totalPage : maxPageNumbersDisplayed
  );
  const [pages, setPages] = useState<number[]>(
    new Array(qtdPageNumbersDisplayed).fill(0).map((n, index) => n + index)
  );

  useEffect(() => {
    if (
      // selectedElement < pages[0] ||
      selectedElement > pages[pages.length - 1]
    ) {
      setPages(
        new Array(maxPageNumbersDisplayed)
          .fill(selectedElement)
          .map((n, index) => selectedElement - index)
          .reverse()
      );
      return;
    }

    if (
      selectedElement < pages[0]
      // selectedElement > pages[pages.length - 1]
    ) {
      setPages(
        new Array(maxPageNumbersDisplayed).fill(0).map((n, index) => n + index)
      );

      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedElement]);

  // FIST PAGE

  function first(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  // NEXT PAGE

  function next(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  // PREVIOUS PAGE

  function prev(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  // LAST PAGE

  function last(number: number) {
    setNumberPage(number);
    setSelectedElement(number);
  }

  return (
    <S.Pagination className={className}>
      <div className={`prev ${selectedElement === 0 ? "disabled" : ""}`}>
        <span id="btn-first" onClick={() => first(0)}>
          Primeira
        </span>
        <span
          onClick={() => prev(selectedElement <= 0 ? 0 : selectedElement - 1)}
        >
          Anterior
        </span>
      </div>

      <S.Buttons>
        {pages.map((page, index) => (
          <button
            key={index}
            className={page === selectedElement ? "actived" : ""}
            onClick={() => (setSelectedElement(page), setNumberPage(page))}
          >
            {page + 1}
          </button>
        ))}
      </S.Buttons>

      <div
        className={`next ${
          selectedElement === totalPage - 1 ? "disabled" : ""
        }`}
      >
        <span
          onClick={() =>
            next(
              selectedElement >= totalPage - 1
                ? totalPage - 1
                : selectedElement + 1
            )
          }
        >
          Próxima
        </span>
        <span id="btn-end" onClick={() => last(totalPage - 1)}>
          Última
        </span>
      </div>
    </S.Pagination>
  );
};
