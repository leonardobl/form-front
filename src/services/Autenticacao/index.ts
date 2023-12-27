import { AxiosResponse } from "axios";
import { ApiUsuarios } from "../../Apis/Usuarios";

const basePath = "/login";

export class Autenticacao {
  static async post(props: IAutenticacaoForm) {
    return ApiUsuarios.post(`${basePath}`, props);
  }
}
