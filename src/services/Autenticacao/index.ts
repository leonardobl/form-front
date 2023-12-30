import { AxiosResponse } from "axios";
import { ApiUsuarios } from "../../Apis/Usuarios";

const basePath = "/login";

type AutenticacaoResponse = {
  token: string;
};
export class Autenticacao {
  static async post(
    props: IAutenticacaoForm
  ): Promise<AxiosResponse<AutenticacaoResponse>> {
    return ApiUsuarios.post(`${basePath}`, props);
  }
}
