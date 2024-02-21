import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/home";
import { Theme } from "./Global/Theme";
import { GlobalStyles } from "./Global/GlobalStyles";
import { Store } from "./components/Pages/Store";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/loja" element={<Store />} />
            <Route path="/domicilio" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
