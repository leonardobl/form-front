import { AxiosResponse } from "axios";
import { ApiBrave1 } from "../../Apis/Brave1";
import { IClienteForm } from "../../types/cliente";

const basePath = "/cliente";

export class Cliente {
  static async post(props: IClienteForm) {
    return ApiBrave1.post(`${basePath}`, props);
  }

  static async getByUsuario({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteForm>> {
    return ApiBrave1.get(`${basePath}/usuario/${uuidUsuario}`);
  }
}
