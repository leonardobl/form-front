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

  static async atualizar(
    props: IUsuarioForm
  ): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}/atualizar`, props);
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

  static async requererNovaSenha({
    cpfCnpj,
  }: {
    cpfCnpj: string;
  }): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.post(`${basePath}/requerer-nova-senha`, { cpfCnpj });
  }

  static async getByEmail({
    cpfCnpj,
  }: {
    cpfCnpj: string;
  }): Promise<AxiosResponse<IUsuarioDTO>> {
    return ApiUsuarios.get(`${basePath}/email?cpfCnpj=${cpfCnpj}`);
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
