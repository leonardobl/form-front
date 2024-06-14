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
import { Inspections } from "../components/Pages/Inspections";
import { Inspection } from "../components/Pages/Inspection";
import { AcceptInspection } from "../components/Pages/AcceptInspection";
import { Concessionaires } from "../components/Pages/Concessionaires";
import { Concessionaire } from "../components/Pages/Concessionaire";
import { Settings } from "../components/Pages/Settings";

export const useMainRoutes = () => {
  return (
    <>
      <Route index element={<Navigate to={"/agendamento"} />} />
      <Route path="/download-comprovante/:id" element={<DocDownloads />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/alterar-senha" element={<ResetPassword />} />
      <Route path="/offline" element={<Offline />} />

      <Route
        path="/minhas-vistorias"
        element={
          <ProtectedRoute>
            <LayoutTemplate />
          </ProtectedRoute>
        }
      >
        <Route index element={<Inspections />} />
        <Route path="vistoria" element={<Inspection />} />
        <Route path="aceite-vistoria" element={<AcceptInspection />} />
      </Route>

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
      <Route path="/configuracoes" element={<Settings />} />
      <Route path="/configuracoes/concessionarias" element={<LayoutTemplate />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <Concessionaires />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="concessionaria"
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <Concessionaire />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="cadastro"
          element={
            <ProtectedRoute>
              <ProtectedAdminRoute>
                <Concessionaire />
              </ProtectedAdminRoute>
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  );
};
