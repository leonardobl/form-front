import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import { IClienteForm } from "../../types/cliente";
import { IClienteDTO } from "../../types/agendamento";

const basePath = "/cliente";

export class Cliente {
  static async post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}`, props);
  }

  static async getByUsuario({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.get(`${basePath}/usuario/${uuidUsuario}`);
  }

  static async atualizar(
    props: IClienteForm
  ): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}/atualizar`, props);
  }
}
