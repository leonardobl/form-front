import { Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Atoms/ProtectedRoute";
import { ProtectedAdminRoute } from "../components/Atoms/ProtectedAdminRoute";
import { Concessionaire } from "../components/Pages/Concessionaire";
import { Concessionaires } from "../components/Pages/Concessionaires";
import { LayoutTemplate } from "../components/Templates/LayoutTemplate";
import { AdminStores } from "../components/Pages/AdminStores";
import { AdminStoresRegister } from "../components/Pages/AdminStoresRegister";
import { AdminStoreDetail } from "../components/Pages/AdminStoreDetail";
import { Settings } from "../components/Pages/Settings";
import { Holidays } from "../components/Pages/Holidays";
import { HolidaysRegister } from "../components/Pages/HolidaysRegister";
import { Itinerants } from "../components/Pages/Itinerants";
import { ItinerantRegister } from "../components/Pages/ItinerantRegister";
import { ItinerantDetail } from "../components/Pages/ItinerantDetail";
import { ItinerantReschedule } from "../components/Pages/ItinerantReschedule";

export const useSettingsRoutes = () => {
  return (
    <Route path="/configuracoes">
      <Route index element={<Settings />} />

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

      <Route path="/configuracoes/lojas" element={<LayoutTemplate />}>
        <Route index element={<AdminStores />} />
        <Route
          path="/configuracoes/lojas/cadastro"
          element={<AdminStoresRegister />}
        />

        <Route
          path="/configuracoes/lojas/detalhe"
          element={<AdminStoreDetail />}
        />
      </Route>

      <Route path="/configuracoes/feriados" element={<LayoutTemplate />}>
        <Route index element={<Holidays />} />
        <Route
          path="/configuracoes/feriados/cadastro"
          element={<HolidaysRegister />}
        />
      </Route>

      <Route path="/configuracoes/itinerantes" element={<LayoutTemplate />}>
        <Route index element={<Itinerants />} />
        <Route
          path="/configuracoes/itinerantes/cadastro"
          element={<ItinerantRegister />}
        />
        <Route
          path="/configuracoes/itinerantes/detalhe"
          element={<ItinerantDetail />}
        />
        <Route
          path="/configuracoes/itinerantes/reagendamento"
          element={<ItinerantReschedule />}
        />
      </Route>
    </Route>
  );
};
