import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Global/Theme";
import { Home } from "./components/Pages/home";
import { Scheduling } from "./components/Pages/scheduling";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
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
import { PaymentTicket } from "./components/Pages/paymentTicket";
import { SchedulingDetail } from "./components/Pages/schedulingDetail";
import { ContextProvider } from "./context/Context";
import { ServiceOptions } from "./components/Pages/serviceOptions";
import { ServiceAddressRegistration } from "./components/Pages/ serviceAddressRegistration";
import { ScheduleListing } from "./components/Pages/scheduleListing";
import { OfflineSystem } from "./components/Pages/ offlineSystem";
import { InforVeihicle } from "./components/Pages/infoVehicle";
import { ProtectedClientRoute } from "./components/Atoms/ProtectedClientRoute";

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
            {/*<Route path="/" element={<Navigate to={"/offline"} />} />*/}

            <Route path="/" element={<Home />} />

            <Route path="/offline" element={<OfflineSystem />} />
            <Route
              path="cadastro-endereco"
              element={
                <ProtectedRoute>
                  <ServiceAddressRegistration />
                </ProtectedRoute>
              }
            />

            <Route
              path="servicos"
              element={
                <ProtectedRoute>
                  <ProtectedClientRoute>
                    <ServiceOptions />
                  </ProtectedClientRoute>
                </ProtectedRoute>
              }
            />
            <Route path="login-cadastro" element={<LoginRegister />} />

            <Route path="login" element={<Login />} />
            <Route path="cadastro-acesso" element={<Register />} />

            <Route path="meus-agendamentos">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ScheduleListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path="detalhe-agendamento"
                element={
                  <ProtectedRoute>
                    <SchedulingDetail />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="agendamento" element={<PageLayoutTemplate />}>
              <Route index element={<Scheduling />} />
              <Route
                path="loja"
                element={
                  <ProtectedClientRoute>
                    <Physical />
                  </ProtectedClientRoute>
                }
              />
              <Route
                path="domicilio"
                element={
                  <ProtectedClientRoute>
                    <Physical />
                  </ProtectedClientRoute>
                }
              />
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
              path="informacoes-veiculo"
              element={
                <ProtectedRoute>
                  <InforVeihicle />
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
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="pix"
                element={
                  <ProtectedRoute>
                    <PaymentPix />
                  </ProtectedRoute>
                }
              />
              <Route
                path="boleto"
                element={
                  <ProtectedRoute>
                    <PaymentTicket />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
