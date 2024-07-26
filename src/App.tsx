import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Routes } from "react-router-dom";
import { Theme } from "./Global/Theme";
import { GlobalStyles } from "./Global/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { useAgendamentoRoutes } from "./routes/useAgendamentoRoutes";
import { useAgendamentoByIdRoutes } from "./routes/useAgendamentoByIdRoutes";
import { useMainRoutes } from "./routes/useMainRoutes";
import { useNovoAgendamentoRoutes } from "./routes/useNovoAgendamentoRoutes";
import { useSettingsRoutes } from "./routes/useSettingsRoutes";

export const App = () => {
  const AgendamentoRoutes = useAgendamentoRoutes();
  const AgendamentoByIdRoutes = useAgendamentoByIdRoutes();
  const MainRoutes = useMainRoutes();
  const NovoAgendamentoRoutes = useNovoAgendamentoRoutes();
  const SettingsRoutes = useSettingsRoutes();

  return (
    <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            {MainRoutes}
            {AgendamentoRoutes}
            {AgendamentoByIdRoutes}
            {NovoAgendamentoRoutes}
            {SettingsRoutes}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
