import React from "react";
import { Route } from "react-router-dom";
import { LayoutTemplate } from "../components/Templates/LayoutTemplate";
import { Home } from "../components/Pages/home";
import { ProtectedClientRoute } from "../components/Atoms/ProtectedClientRoute";
import { Store } from "../components/Pages/Store";
import { Delivery } from "../components/Pages/Delivery";

export const useAgendamentoRoutes = () => {
  return (
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
            <Delivery />
          </ProtectedClientRoute>
        }
      />
    </Route>
  );
};
