import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { Home } from "./components/Pages/home";
import { Scheduling } from "./components/Pages/scheduling";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Payment } from "./components/Pages/payment";

import { Physical } from "./components/Pages/physical";
import { PageLayoutTemplate } from "./components/Templates/PageTemplate";
import { Register } from "./components/Pages/register";

import { Login } from "./components/Pages/login";
import { LoginRegister } from "./components/Pages/loginRegister";
import { ToastContainer } from "react-toastify";
import { SearchVehicle } from "./components/Pages/searchVehicle";
import { ProtectedRoute } from "./components/Atoms/ProtectedRoute";

import { PaymentPix } from "./components/Pages/paymentPix";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login-cadastro" element={<LoginRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="agendamento" element={<PageLayoutTemplate />}>
            <Route index element={<Scheduling />} />
            <Route path="loja-fisica" element={<Physical />} />
            <Route path="atendimento-domicilio" element={<Physical />} />
          </Route>
          <Route
            path="buscar-veiculo"
            element={
              <ProtectedRoute>
                <SearchVehicle />
              </ProtectedRoute>
            }
          />
          <Route
            path="pagamento"
            element={
              <ProtectedRoute>
                <PageLayoutTemplate />
              </ProtectedRoute>
            }
          >
            <Route index element={<Payment />} />
            <Route path="pix" element={<PaymentPix />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
