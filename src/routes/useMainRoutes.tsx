import React from "react";
import { Navigate, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Atoms/ProtectedRoute";
import { ProtectedAdminRoute } from "../components/Atoms/ProtectedAdminRoute";
import { NewScheduling } from "../components/Pages/NewScheduling";
import { Profile } from "../components/Pages/Profile";
import { Offline } from "../components/Pages/Offline";
import { ResetPassword } from "../components/Pages/ResetPassword";
import { DocDownloads } from "../components/Atoms/DocDownload";
import { NotFound } from "../components/Atoms/NotFound";
import { SettingsTemplate } from "../components/Templates/SettingsTemplate";
import { LayoutTemplate } from "../components/Templates/LayoutTemplate";
import { ConcessionaireTemplate } from "../components/Templates/ConcessionaireTemplate";

export const useMainRoutes = () => {
  return (
    <>
      <Route index element={<Navigate to={"/agendamento"} />} />
      <Route path="/download-comprovante/:id" element={<DocDownloads />} />
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
      <Route path="/configuracoes/concessionarias" element={<LayoutTemplate />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <SettingsTemplate />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="concessionaria"
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ConcessionaireTemplate />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="cadastro"
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <ConcessionaireTemplate />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  );
};
