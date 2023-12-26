import { IEnderecoDTO, ILocalTime } from "./agendamento";
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
  horarioFinal: ILocalTime;
  horarioInicial: ILocalTime;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: ILocalTime;
  uuid: string;
}
