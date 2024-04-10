import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import objectToParams from "../../utils/objectToParams";
import {
  IColaboradorDTO,
  IColaboradorForm,
  IListarAgendamentosProps,
} from "../../types/colaborador";
import { IAgendamentoDTO } from "../../types/agendamento";

const basePath = "/colaborador";

export class Colaborador {
  static async get(): Promise<AxiosResponse<IColaboradorDTO[]>> {
    return ApiBrave.get(basePath);
  }

  static async listarAgendamentos(
    props: IListarAgendamentosProps
  ): Promise<AxiosResponse<IAgendamentoDTO[]>> {
    return ApiBrave.get(`${basePath}/listar-agendamentos`);
  }

  static async put(): Promise<AxiosResponse<IColaboradorForm>> {
    return ApiBrave.put(`${basePath}/cadastrar`);
  }
}
