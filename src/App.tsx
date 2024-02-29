import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { Vehicle } from "./components/Pages/Vehicle";
import { AddressRegistration } from "./components/Pages/AddressRegistration";
import { ProtectedRoute } from "./components/Atoms/ProtectedRoute";
import { ProtectedClientRoute } from "./components/Atoms/ProtectedClientRoute";
import { Payment } from "./components/Pages/Payment";
import { Pix } from "./components/Pages/Pix";
import { Ticket } from "./components/Pages/Ticket";
import { Schedules } from "./components/Pages/Schedules";
import { ScheduleDetail } from "./components/Pages/ScheduleDetail";
import { EditProfile } from "./components/Pages/EditProfile";
import { NewScheduling } from "./components/Pages/NewScheduling";
import { NotFound } from "./components/Atoms/NotFound";
import { Offline } from "./components/Pages/Offline";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/agendamento"} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="offline" element={<Offline />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/novo-agendamento"
              element={
                <ProtectedRoute>
                  <NewScheduling />
                </ProtectedRoute>
              }
            />
            <Route path="/agendamento" element={<LayoutTemplate />}>
              <Route index element={<Home />} />
              <Route
                path="loja"
                element={
                  <ProtectedClientRoute>
                    <Store />
                  </ProtectedClientRoute>
                }
              />
              <Route
                path="domicilio"
                element={
                  <ProtectedClientRoute>
                    <Residence />
                  </ProtectedClientRoute>
                }
              />
            </Route>

            <Route
              path="/agendamento/:uuidAgendamento?"
              element={<LayoutTemplate />}
            >
              <Route path="login" element={<Login />} />
              <Route path="login-cadastro" element={<LoginRegister />} />
              <Route path="cadastro-usuario" element={<UserRegistration />} />

              <Route path="servicos">
                <Route index element={<Services />} />

                <Route
                  path="cadastro-endereco"
                  element={<AddressRegistration />}
                />
                <Route path="emplacamento" element={<License />} />
                <Route path="vistoria" element={<Survey />} />
                <Route path="veiculo" element={<Vehicle />} />
              </Route>

              <Route path="pagamento">
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Payment />
                    </ProtectedRoute>
                  }
                />
                <Route path="pix" element={<Pix />} />
                <Route path="boleto" element={<Ticket />} />
              </Route>
            </Route>

            <Route
              path="meus-agendamentos"
              element={
                <ProtectedRoute>
                  <LayoutTemplate />
                </ProtectedRoute>
              }
            >
              <Route index element={<Schedules />} />
              <Route path="agendamento" element={<ScheduleDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
