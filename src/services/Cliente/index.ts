import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IClienteDTO,
  IClienteForm,
  IConcessionariaProps,
  IPageClienteDTO,
} from "../../types/cliente";

import { IPageRequest } from "../../types/page";
import objectToParams from "../../utils/objectToParams";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/cliente";

interface IClienteList extends IPageRequest {
  nomeCpfCnpj: string;
}

export class Cliente {
  static async post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}`, props);
  }

  static async getConcessionarias(
    props: IConcessionariaProps
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    const values = removeEmpty(props);
    const params = objectToParams(values);
    return ApiBrave.get(`${basePath}/listar-concessionarias?${params}`);
  }

  static async lista(
    props: IClienteList
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    const params = objectToParams(props);
    return ApiBrave.get(`${basePath}/listar?${params}`);
  }

  static async getByUsuario({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.get(`${basePath}/usuario/${uuidUsuario}`);
  }

  static async atualizar(
    props: IClienteForm
  ): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}/atualizar`, props);
  }
}
