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
import { NewScheduling } from "./components/Pages/NewScheduling";
import { NotFound } from "./components/Atoms/NotFound";
import { Offline } from "./components/Pages/Offline";
import { ForgotPassword } from "./components/Pages/ForgotPassword";
import { ResetPassword } from "./components/Pages/ResetPassword";
import { ProtectedAdminRoute } from "./components/Atoms/ProtectedAdminRoute";
import { Profile } from "./components/Pages/Profile";
import { Deliverys } from "./components/Pages/Deliverys";
import { Stores } from "./components/Pages/Stores";
import { PixConfirmation } from "./components/Pages/PixConfirmation";
import { ScheduleConfirmation } from "./components/Pages/ScheduleConfirmation";
import { ConfirmAppointment } from "./components/Pages/ConfirmAppointment";
import { DocDownloads } from "./components/Atoms/DocDownload";
import { DeliveryAgentTemplate } from "./components/Templates/DeliveryAgentTemplate";

export const App = () => {
  return (
    <ThemeProvider theme={Theme[process.env.REACT_APP_PROJECT]}>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to={"/agendamento"} />} />
            <Route
              path="/download-comprovante/:id"
              element={<DocDownloads />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/alterar-senha" element={<ResetPassword />} />
            <Route path="/offline" element={<Offline />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/novo-agendamento"
              element={
                <ProtectedRoute>
                  <ProtectedAdminRoute>
                    <NewScheduling />
                  </ProtectedAdminRoute>
                </ProtectedRoute>
              }
            />

            <Route path="/agendamento" element={<LayoutTemplate />}>
              <Route index element={<Home />} />

              <Route path="agente">
                <Route path="delivery" element={<DeliveryAgentTemplate />} />
              </Route>

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
              <Route path="recuperar-senha" element={<ForgotPassword />} />

              <Route path="login" element={<Login />} />
              <Route
                path="confirmar-horario"
                element={<ScheduleConfirmation />}
              />

              <Route
                path="confirmar-agendamento"
                element={<ConfirmAppointment />}
              />
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
                <Route path="pix">
                  <Route index element={<Pix />} />
                  <Route
                    path="confirmacao-pagamento"
                    element={<PixConfirmation />}
                  />
                </Route>
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
              <Route path="deliverys" element={<Deliverys />} />
              <Route path="atendimento-loja" element={<Stores />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
