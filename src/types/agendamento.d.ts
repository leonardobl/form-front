import { StatusAgendamentoEnum } from "../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { TipoClienteEnum } from "../enums/tipoCliente";
import { TipoServicoEnum } from "../enums/tipoServico";
import { tipoVeiculoEnum } from "../enums/tipoVeiculo";
import { IPageableObject, ISortObject } from "./delivery";
import { IFaturaDTO } from "./pagamento";

export interface IAgendamentoDTO {
  cliente: IClienteDTO;
  codigoPagamento: string;
  dataPagamento: string;
  dataRealizacao: string;
  delivery: IDeliveryDTO;
  atendimentoDomiciliar: IAtendimentoDomiciliarDTO;
  diaAgendado: string;
  horaAgendada: string;
  loja: ILojaDTO;
  fatura: IFaturaDTO;
  primeiroAgendamento: string;
  revistoria: boolean;
  servico: IServicoDTO;
  status: StatusAgendamentoEnum;
  tipoAtendimento: TipoAtendimentoEnum;
  uuid: string;
  veiculo: IVeiculoDTO;
}

export interface IVeiculoDTO {
  uuid: string;
  modelo: string;
  ano: string;
  renavam: string;
  placa: string;
  chassi: string;
  tipo: tipoVeiculoEnum;
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
  horarioFinal: string;
  horarioInicial: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uf: string;
  uuid: string;
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

export interface IServicoDTO {
  nome: string;
  tipo: TipoServicoEnum;
  uuid: string;
  valorDelivery: number;
  valorPadrao: number;
}

export interface IAgendamentoBasicoForm {
  diaAgendado: string;
  horaAgendada: string;
  tipoAtendimento: string;
  uuidDelivery?: string;
  uuidLoja?: string;
}

export interface IAgendamentoForm {
  codigoPagamento?: string;
  dataPagamento?: string;
  dataRealizacao?: string;
  diaAgendado: string;
  horaAgendada: string;
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

export interface IAtendimentoDomiciliarDTO {
  nome: string;
  telefone: string;
  endereco: IEnderecoDTO;
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

export interface IReagendamentoForm {
  bairro?: string;
  cep?: string;
  cidade?: string;
  complemento?: string;
  diaAgendado: string;
  horaAgendada: string;
  logradouro?: string;
  nome?: string;
  numero?: string;
  telefone?: string;
  uf?: string;
  uuidDelivery?: string;
  uuidLoja?: string;
}
