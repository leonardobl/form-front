import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import objectToParams from "../../utils/objectToParams";
import {
  IColaboradorCompletoDTO,
  IColaboradorDTO,
  IColaboradorForm,
  IListarAgendamentosProps,
  IlistarPorDeliveryProps,
  IlistarPorLojaProps,
} from "../../types/colaborador";
import { IAgendamentoDTO } from "../../types/agendamento";

const basePath = "/colaborador";

export class Colaborador {
  static async get(): Promise<AxiosResponse<IColaboradorDTO[]>> {
    return ApiBrave.get(basePath);
  }

  static async atual(): Promise<AxiosResponse<IColaboradorCompletoDTO>> {
    return ApiBrave.get(`${basePath}/atual`);
  }

  static async listarAgendamentos(
    props: IListarAgendamentosProps
  ): Promise<AxiosResponse<IAgendamentoDTO[]>> {
    const params = objectToParams(props);
    return ApiBrave.get(`${basePath}/listar-agendamentos?${params}`);
  }

  static async listarPorDelivery(
    props: IlistarPorDeliveryProps
  ): Promise<AxiosResponse<IColaboradorDTO[]>> {
    const params = objectToParams(props);
    return ApiBrave.get(`${basePath}/listar-por-delivery?${params}`);
  }

  static async listarPorLoja(
    props: IlistarPorLojaProps
  ): Promise<AxiosResponse<IColaboradorDTO[]>> {
    const params = objectToParams(props);
    return ApiBrave.get(`${basePath}/listar-por-loja?${params}`);
  }

  static async put(
    props: IColaboradorForm
  ): Promise<AxiosResponse<IColaboradorDTO>> {
    return ApiBrave.put(`${basePath}/cadastrar`, props);
  }
}
