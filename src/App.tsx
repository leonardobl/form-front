import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Routes } from "react-router-dom";
import { Theme } from "./Global/Theme";
import { GlobalStyles } from "./Global/GlobalStyles";
import { Store } from "./components/Pages/Store";
import "react-toastify/dist/ReactToastify.css";
import { useAgendamentoRoutes } from "./routes/useAgendamentoRoutes";
import { useAgendamentoByIdRoutes } from "./routes/useAgendamentoByIdRoutes";
import { useMainRoutes } from "./routes/useMainRoutes";
import { useNovoAgendamentoRoutes } from "./routes/useNovoAgendamentoRoutes";
import { Delivery } from "./components/Pages/Delivery";
import { AddressServiceRegistration } from "./components/Pages/AddressServiceRegistration";
import { Settings } from "./components/Pages/Settings";
import { Concessionaire } from "./components/Pages/Concessionaire";

export const App = () => {
  const AgendamentoRoutes = useAgendamentoRoutes();
  const AgendamentoByIdRoutes = useAgendamentoByIdRoutes();
  const MainRoutes = useMainRoutes();
  const NovoAgendamentoRoutes = useNovoAgendamentoRoutes();

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
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
