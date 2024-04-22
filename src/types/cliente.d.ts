import { TipoClienteEnum } from "../enums/tipoCliente";
import { IEnderecoDTO } from "./agendamento";
import { IPageableObject, ISortObject } from "./delivery";
import { IPageRequest } from "./page";

export interface IClienteForm {
  cpfCnpj: string;
  email?: string;
  endereco?: IEnderecoDTO;
  nome: string;
  senha?: string;
  telefone?: string;
  tipo: TipoClienteEnum;
  uuid?: string;
}

export interface IClienteDTO {
  cpfCnpj: string;
  email: string;
  endereco?: IEnderecoDTO;
  nome: string;
  uuid: string;
  telefone: string;
  tipo: TipoClienteEnum;
}

export interface IPageClienteDTO {
  content: IClienteDTO[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageableObject;
  size: number;
  sort: ISortObject;
  totalElements: number;
  totalPages: number;
}

export interface IConcessionariaProps extends IPageRequest {
  nomeCpfCnpj?: string;
  cidade?: string;
}
