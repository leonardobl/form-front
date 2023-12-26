import { AxiosResponse } from "axios";
import { ApiAgendamento } from "../../Apis/Agendamento";
import { IAgendamentoDTO } from "../../types/agendamento";

export class Ibge {
  static async UFs(): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiAgendamento.get(`estados`);
  }
}
