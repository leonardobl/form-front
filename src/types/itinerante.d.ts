import { IEnderecoDTO } from "./agendamento";
import { IColaboradorDTO } from "./colaborador";
import { IDeliveryDTO, IPageableObject, ISortObject } from "./delivery";
import { IPageRequest } from "./page";

export interface IItineranteListProps extends IPageRequest {
  cidade?: string;
  dataRealizacao?: string;
  uuidDelivery?: string;
}

export interface IPageItineranteDTO {
  content: IItineranteDTO[];
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

export interface IItineranteDTO {
  uuid: string;
  colaboradores: IColaboradorDTO[];
  dataRealizacao: string;
  delivery: IDeliveryDTO;
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  quantidadeVagas: number;
  tempoMedio: string;
  totalVagas: number;
}

export interface IItineranteForm {
  dataRealizacao: string;
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioFinalAlmoco?: string;
  horarioInicial: string;
  horarioInicialAlmoco?: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uuidColaboradores?: string[];
  uuidDelivery: string;
}

export interface IItineranteFormRHF {
  dataRealizacao: string;
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioFinalAlmoco?: string;
  horarioInicial: string;
  horarioInicialAlmoco?: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uuidColaboradores?: {
    value: string;
    label: string;
    element?: IColaboradorDTO;
  }[];
  uuidDelivery: string;
}
