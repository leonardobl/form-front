import { StatusAgendamentoEnum } from "../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { TipoClienteEnum } from "../enums/tipoCliente";
import { TipoServicoEnum } from "../enums/tipoServico";

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
  complemento: string;
  logradouro: string;
  numero: string;
  uf: string;
  uuid: string;
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
  endereco: Endereco;
  horarioFinal: HoraAgendada;
  horarioInicial: HoraAgendada;
  nome: string;
  quantidadeVagas: number;
  tempoMedio: HoraAgendada;
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
