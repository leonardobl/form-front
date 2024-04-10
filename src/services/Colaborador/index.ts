import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import objectToParams from "../../utils/objectToParams";

const basePath = "/colaborador";

export class Colaborador {
  static async get(): Promise<AxiosResponse<any>> {
    return ApiBrave.get(`${basePath}`);
  }
}
