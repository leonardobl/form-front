import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import { IBancoDTO } from "../../types/banco";

const basePath = "/banco";

export class Banco {
  static async list(): Promise<AxiosResponse<IBancoDTO[]>> {
    return ApiBrave.get(`${basePath}`);
  }

  static async byCodigo({
    codigo,
  }: {
    codigo: string;
  }): Promise<AxiosResponse<IBancoDTO>> {
    return ApiBrave.get(`${basePath}/buscar?codigo=${codigo}`);
  }
}
