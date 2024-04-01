import { SexoEnum } from "../enums/sexo";
import { TipoColaboradorEnum } from "../enums/tipoColaborador";
import { TipoAtendimentoEnum } from "./../enums/tipoAtendimento";
import { IEnderecoDTO } from "./agendamento";
import { IPageableObject, ISortObject } from "./delivery";

export interface IPageLojaDTO {
  content: ILojaDTO[];
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

export interface ILojaDTO {
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioInicial: string;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uuid: string;
}

export interface IColaboradorDTO {
  cpf: string;
  dataNascimento: string;
  nome: string;
  sexo: string;
  tipo: string;
  uuidUsuario: string;
}

export interface IBaiaDTO {
  nome: string;
  uuid: string;
}

export interface IColaboradorForm {
  cpf: string;
  dataNascimento?: string;
  nome: string;
  sexo?: SexoEnum;
  tipo: TipoColaboradorEnum;
  uuidUsuario?: string;
}

export interface IBaiaForm {
  nome: string;
  uuid?: string;
}
