import { AxiosResponse } from "axios";
import { ApiUsuarios } from "../../Apis/Usuarios";
import { IUsuarioDTO, IUsuarioForm } from "../../types/usuario";

const basePath = "/usuario";

export class Usuario {
  static async post(props: IUsuarioForm): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}`, props);
  }

  static async get({
    email,
  }: {
    email: string;
  }): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.get(`${basePath}/email?email=${email}`);
  }
}
