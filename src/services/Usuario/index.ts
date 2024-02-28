import { IUsuarioCompletoDTO } from "./../../types/usuario.d";
import { AxiosResponse } from "axios";
import { ApiUsuarios } from "../../Apis/Usuarios";
import { INovaSenhaForm, IUsuarioDTO, IUsuarioForm } from "../../types/usuario";
import { IStandardErrorDTO } from "../../types/error";

const basePath = "/usuario";

export class Usuario {
  static async post(props: IUsuarioForm): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}`, props);
  }

  static async alterarSenha(
    props: INovaSenhaForm
  ): Promise<AxiosResponse<IStandardErrorDTO>> {
    return ApiUsuarios.post(`${basePath}/alterar-senha`, props);
  }

  static async cadastrarCliente(
    props: IUsuarioForm
  ): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}/cadastrar-cliente`, props);
  }

  static async requererNovaSenha(
    props: INovaSenhaForm
  ): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}/requerer-nova-senha`, props);
  }

  static async getByEmail({
    email,
  }: {
    email: string;
  }): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.get(`${basePath}/email?email=${email}`);
  }

  static async getByCpfCnpj({
    cpfCnpj,
  }: {
    cpfCnpj: string;
  }): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.get(`${basePath}/cpfCnpj?cpfCnpj=${cpfCnpj}`);
  }

  static async getByCpfCnpjCompleto({
    cpfCnpj,
  }: {
    cpfCnpj: string;
  }): Promise<AxiosResponse<IUsuarioCompletoDTO>> {
    return ApiUsuarios.get(`${basePath}/cpfCnpj/completo?cpfCnpj=${cpfCnpj}`);
  }
}
