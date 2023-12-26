import { AxiosResponse } from "axios";
import { IViaCepV2 } from "../../types/viaCep";
import { ApiViaCep } from "../../Apis/ViaCepApi";

export class ViaCep {
  static async get(cep: string): Promise<AxiosResponse<IViaCepV2>> {
    return ApiViaCep.get(`/${cep}`);
  }
}
