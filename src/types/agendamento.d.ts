import { StatusAgendamentoEnum } from "../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { TipoClienteEnum } from "../enums/tipoCliente";
import { TipoServicoEnum } from "../enums/tipoServico";
import { IPageableObject, ISortObject } from "./delivery";

export interface IAgendamentoDTO {
  cliente: IClienteDTO;
  codigoPagamento: string;
  dataPagamento: string;
  dataRealizacao: string;
  delivery: IDeliveryDTO;
  diaAgendado: string;
  horaAgendada: ILocalTime;
  loja: ILojaDTO;
  primeiroAgendamento: string;
  revistoria: boolean;
  servico: IServicoDTO;
  status: StatusAgendamentoEnum;
  tipoAtendimento: TipoAtendimentoEnum;
  uuid: string;
  veiculo: IVeiculoDTO;
}

export interface IClienteDTO {
  cpfCnpj: string;
  email: string;
  endereco: IEnderecoDTO;
  nome: string;
  telefone: string;
  tipo: TipoClienteEnum;
  uuid: string;
}

export interface IEnderecoDTO {
  bairro: string;
  cep: string;
  cidade: string;
  complemento?: string;
  logradouro: string;
  numero?: string;
  uf: string;
  uuid?: string;
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

export interface ILocalTime {
  hour: number;
  minute: number;
  nano: number;
  second: number;
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

export interface IServicoDTO {
  nome: string;
  tipo: TipoServicoEnum;
  uuid: string;
  valorDelivery: number;
  valorPadrao: number;
}

export interface IVeiculoDTO {
  ano: string;
  chassi: string;
  modelo: string;
  placa: string;
  renavam: string;
  tipo: TipoServicoEnum;
  uuid: string;
}

export interface IAgendamentoBasicoForm {
  diaAgendado: string;
  horaAgendada: ILocalTime;
  tipoAtendimento: string;
  uuidDelivery?: string;
  uuidLoja?: string;
}

export interface IAgendamentoForm {
  codigoPagamento?: string;
  dataPagamento?: string;
  dataRealizacao?: string;
  diaAgendado: string;
  horaAgendada: ILocalTime;
  primeiroAgendamento?: string;
  revistoria?: boolean;
  status?: StatusAgendamentoEnum;
  tipoAtendimento: TipoAtendimentoEnum;
  uuidCliente?: string;
  uuidDelivery?: string;
  uuidLoja?: string;
  uuidServico?: string;
  uuidVeiculo?: string;
}

export interface IAtendimentoDomiciliarForm {
  endereco: IEnderecoDTO;
  nome: string;
  telefone: string;
  uuid: string;
}

export interface IPageAgendamentoDTO {
  content: IAgendamentoDTO[];
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
