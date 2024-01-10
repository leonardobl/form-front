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
