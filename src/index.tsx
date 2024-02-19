import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { Home } from "./components/Pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
