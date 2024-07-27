import { TipoFeriadoEnum } from "../enums/tipoFeriado";
import { IPageableObject, ISortObject } from "./delivery";
import { IPageRequest } from "./page";

export interface IFeriadoListProps extends IPageRequest {
  tipo?: TipoFeriadoEnum;
  cidade?: string;
  uf?: string;
  dia?: string;
}

export interface IPageFeriadoDTO {
  content: IFeriadoDTO[];
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

export interface IFeriadoDTO {
  cidade: string;
  dia: string;
  tipo: string;
  uf: string;
  uuid: string;
}
