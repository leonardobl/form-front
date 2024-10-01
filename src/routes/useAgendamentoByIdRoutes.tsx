import React from "react";
import { Ticket } from "../components/Pages/Ticket";
import { PixConfirmation } from "../components/Pages/PixConfirmation";
import { Route } from "react-router-dom";
import { Pix } from "../components/Pages/Pix";
import { Payment } from "../components/Pages/Payment";
import { ProtectedRoute } from "../components/Atoms/ProtectedRoute";
import { Vehicle } from "../components/Pages/Vehicle";
import { Survey } from "../components/Pages/Survey";
import { License } from "../components/Pages/License";
import { AddressRegistration } from "../components/Pages/AddressRegistration";
import { Services } from "../components/Pages/Services";
import { UserRegistration } from "../components/Pages/UserRegistration";
import { LoginRegister } from "../components/Pages/LoginRegister";
import { ConfirmAppointment } from "../components/Pages/ConfirmAppointment";
import { ScheduleConfirmation } from "../components/Pages/ScheduleConfirmation";
import { Login } from "../components/Pages/Login";
import { ForgotPassword } from "../components/Pages/ForgotPassword";
import { LayoutTemplate } from "../components/Templates/LayoutTemplate";
import { Delivery } from "../components/Pages/Delivery";
import { Store } from "../components/Pages/Store";
import { PixCancellation } from "../components/Pages/PixCancellation";
import { TicketCancellation } from "../components/Pages/TicketCancellation";
import { ConcessionaireAddressRegister } from "../components/Pages/ConcessionaireAdressRegister";
import { Invoice } from "../components/Pages/Invoice";

export const useAgendamentoByIdRoutes = () => {
  return (
    <Route path="/agendamento/:uuidAgendamento?" element={<LayoutTemplate />}>

      <Route path="login" element={<Login />} />
      <Route path="confirmar-horario" element={<ScheduleConfirmation />} />
      <Route path="fatura" element={<Invoice />} />

      <Route path="confirmar-agendamento" element={<ConfirmAppointment />} />
      <Route path="login-cadastro" element={<LoginRegister />} />
      <Route path="cadastro-usuario" element={<UserRegistration />} />
      <Route path="domicilio" element={<Delivery />} />
      <Route path="loja" element={<Store />} />

      <Route path="servicos">
        <Route index element={<Services />} />
        <Route
          path="cadastro-endereco-concessionaria"
          element={<ConcessionaireAddressRegister />}
        />
        <Route path="cadastro-endereco" element={<AddressRegistration />} />
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
          <Route path="confirmacao-pagamento" element={<PixConfirmation />} />
        </Route>
        <Route path="boleto" element={<Ticket />} />
        <Route path="cancelamento-pix" index element={<PixCancellation />} />
        <Route
          path="cancelamento-boleto"
          index
          element={<TicketCancellation />}
        />
      </Route>
    </Route>
  );
};
