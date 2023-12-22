import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { Home } from "./components/Pages/home";
import { Scheduling } from "./components/Pages/scheduling";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { Login } from "./components/Pages/login";
import { MUI_Theme } from "./Global/MUI-Theme";
import { Physical } from "./components/Pages/fical";
import { SchedulingContainerTemplate } from "./components/Templates/SchedulingContainerTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <MUIThemeProvider theme={MUI_Theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="agendamento" element={<SchedulingContainerTemplate />}>
              <Route index element={<Scheduling />} />
              <Route path="loja-fisica" element={<Physical />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
