import { ILocalTime } from "./agendamento";

export interface IPageDeliveryDTO {
  content: IDeliveryDTO[];
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

export interface IDeliveryDTO {
  cidade: string;
  horarioFinal: ILocalTime;
  horarioInicial: ILocalTime;
  quantidadeVagas: number;
  tempoMedio: ILocalTime;
  uf: string;
  uuid: string;
}

export interface IPageableObject {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: ISortObject;
  unpaged: boolean;
}

export interface ISortObject {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}