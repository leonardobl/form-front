import { IPageableObject, ISortObject } from "./delivery";

export interface IPageMunicipioDTO {
  content: IMunicipioDTO[];
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

export interface IMunicipioDTO {
  codigoDetran: string;
  estado: string;
  nome: string;
  uuid: string;
}
