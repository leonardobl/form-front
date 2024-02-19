import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global/GlobalStyles";
import { ContextProvider, Themes } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "./components/Pages/notFound";
import { OfflineSystem } from "./components/Pages/ offlineSystem";
import { ProtectedRoute } from "./components/Atoms/ProtectedRoute";
import { ServiceAddressRegistration } from "./components/Pages/ serviceAddressRegistration";
import { ProtectedClientRoute } from "./components/Atoms/ProtectedClientRoute";
import { ServiceOptions } from "./components/Pages/serviceOptions";
import { LoginRegister } from "./components/Pages/loginRegister";
import { Login } from "./components/Pages/login";
import { Register } from "./components/Pages/register";
import { ScheduleListing } from "./components/Pages/scheduleListing";
import { SchedulingDetail } from "./components/Pages/schedulingDetail";
import { PageLayoutTemplate } from "./components/Templates/PageTemplate";
import { Scheduling } from "./components/Pages/scheduling";
import { Physical } from "./components/Pages/physical";
import { SearchVehicle } from "./components/Pages/searchVehicle";
import { Payment } from "./components/Pages/payment";
import { InforVeihicle } from "./components/Pages/infoVehicle";
import { PaymentPix } from "./components/Pages/paymentPix";
import { PaymentTicket } from "./components/Pages/paymentTicket";

import { useContextSite } from "./context/Context";
import { DefaultTheme } from "styled-components/dist/types";
import { STARCHECK } from "./Global/StarCheckTheme";

export const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(STARCHECK);
  const { project } = useContextSite();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            {/*<Route path="/" element={<Navigate to={"/offline"} />} />*/}

            {/* <Route path="/" element={<Home />} /> */}

            <Route path="*" element={<NotFound />} />

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
            <Route path="/" element={<PageLayoutTemplate />}>
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
  );
};
