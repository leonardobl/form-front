import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { Home } from "./components/Pages/home";
import { Scheduling } from "./components/Pages/scheduling";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<Scheduling />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
