import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import { IClienteForm } from "../../types/cliente";

const basePath = "/cliente";

export class Cliente {
  static async post(props: IClienteForm) {
    return ApiBrave.post(`${basePath}`, props);
  }

  static async getByUsuario({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteForm>> {
    return ApiBrave.get(`${basePath}/usuario/${uuidUsuario}`);
  }
}
