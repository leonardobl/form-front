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
  ativo: true;
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioFinalFds: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  horarioInicialFds: string;
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
  uuid: string;
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

export interface ILojaForm {
  endereco: IEnderecoLojaForm;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioFinalFds: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  horarioInicialFds: string;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uuidContaIugu: string;
}

interface IEnderecoLojaForm {
  bairro?: string;
  cep?: string;
  cidade: string;
  complemento?: string;
  logradouro?: string;
  numero?: string;
  uf: string;
}

export interface IContaIuguForm {
  apiToken: string;
  cnpj: string;
  idConta: string;
  nome: string;
}
export interface IContaIuguDTO {
  apiToken: string;
  cnpj: string;
  idConta: string;
  nome: string;
  uuid: string;
}

//

export interface ILojaCompletaDTO {
  ativo: boolean;
  contaIugu: IContaIuguDTO;
  endereco: IEnderecoDTO;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioFinalFds: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  horarioInicialFds: string;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uuid: string;
}

//

export interface ILojaAtualizarForm {
  endereco: IEnderecoLojaForm;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioFinalFds: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  horarioInicialFds: string;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: string;
}

export interface ILojaAtualizarFormProps extends ILojaAtualizarForm {
  uuidLoja: string;
}
