import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/home";
import { Theme } from "./Global/Theme";
import { GlobalStyles } from "./Global/GlobalStyles";
import { Store } from "./components/Pages/Store";
import { Residence } from "./components/Pages/Residence";
import "react-toastify/dist/ReactToastify.css";
import { LoginRegister } from "./components/Pages/LoginRegister";
import { Login } from "./components/Pages/Login";
import { UserRegistration } from "./components/Pages/UserRegistration";
import { Services } from "./components/Pages/Services";
import { LayoutTemplate } from "./components/Templates/LayoutTemplate";
import { License } from "./components/Pages/License";
import { Survey } from "./components/Pages/Survey";

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
            <Route path="/domicilio" element={<Residence />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-cadastro" element={<LoginRegister />} />
            <Route path="/cadastro-usuario" element={<UserRegistration />} />
            <Route path="/servicos" element={<LayoutTemplate />}>
              <Route index element={<Services />} />
              <Route path="emplacamento" element={<License />} />
              <Route path="vistoria" element={<Survey />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
