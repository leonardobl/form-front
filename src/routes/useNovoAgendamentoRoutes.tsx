import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Atoms/ProtectedRoute";
import { LayoutTemplate } from "../components/Templates/LayoutTemplate";
import { Schedules } from "../components/Pages/Schedules";
import { ScheduleDetail } from "../components/Pages/ScheduleDetail";
import { Deliverys } from "../components/Pages/Deliverys";
import { Stores } from "../components/Pages/Stores";

export const useNovoAgendamentoRoutes = () => {
  return (
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
      <Route path="atendimentos-loja" element={<Stores />} />
    </Route>
  );
};
