import { LocalAtendimentoEnum } from "../enums/localAtendimento";
import { StatusAgendamentoEnum } from "../enums/statusAgendamento";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { TipoServicoEnum } from "../enums/tipoServico";
import { tipoVeiculoEnum } from "../enums/tipoVeiculo";
import { IClienteDTO } from "./cliente";
import { IPageableObject, ISortObject } from "./delivery";
import { IItineranteDTO } from "./itinerante";
import { IContaIuguDTO, ILojaDTO } from "./loja";
import { IFaturaDTO } from "./pagamento";
import { IPageRequest } from "./page";

// -------------------------
export interface IAgendamentoDTO {
  atendimentoDomiciliar: IAtendimentoDomiciliarDTO;
  cliente: IClienteDTO;
  codigoPagamento: string;
  concessionaria: boolean;
  dataPagamento: string;
  dataRealizacao: string;
  delivery: IDeliveryDTO;
  diaAgendado: string;
  emEspera: boolean;
  fatura: IFaturaDTO;
  horaAgendada: HoraAgendada;
  itinerante: IItineranteDTO;
  loja: ILojaDTO;
  primeiroAgendamento: string;
  revistoria: boolean;
  servico: IServicoDTO;
  status: StatusAgendamentoEnum;
  tipoAtendimento: TipoAtendimentoEnum;
  uuid: string;
  veiculo: IVeiculoDTO;
  vistoriador: IColaboradorDTO;
}

export interface IDeliveryDTO {
  cidade?: string;
  horarioFinal: string;
  horarioFinalAlmoco: string;
  horarioFinalFds: string;
  horarioInicial: string;
  horarioInicialAlmoco: string;
  horarioInicialFds: string;
  quantidadeVagas: number;
  tempoMedio: string;
  uf?: string;
  uuid: string;
  endereco?: IEnderecoDTO;
  nome?: string;
  contaIugu: IContaIuguDTO;
}

// -------------------------

export interface IVeiculoDTO {
  uuid: string;
  modelo: string;
  ano: string;
  renavam: string;
  placa: string;
  chassi: string;
  tipo: tipoVeiculoEnum;
}

export interface IColaboradorDTO {
  cpf: string;
  dataNascimento: string;
  nome: string;
  sexo: string;
  tipo: string;
  uuid: string;
  uuidUsuario: string;
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
  localAtendimento?: string;
}

export interface IAgendamentoIniciarForm {
  uuidAtendente?: string;
  uuidBaia?: string;
  uuidVistoriador?: string;
}

export interface IIniciarAgendamentoProps extends IAgendamentoIniciarForm {
  uuid?: string;
}

export type AgendamentoByHourProps = {
  data?: string;
  status?: StatusAgendamentoEnum[];
  uuidLoja?: string;
  uuidDelivery?: string;
};

export interface IPutAgendamentoProps extends IAgendamentoForm {
  uuid: string;
}

export interface IReagendamentoProps extends IReagendamentoForm {
  uuidAgendamento: string;
}

export type DownloadProps = {
  cidade?: string;
  dia: string;
};

export interface IGetAgendamentosProps extends IPageRequest {
  loja?: string;
  nome?: string;
  cpfCnpj?: string;
  tipoAtendimento?: TipoAtendimentoEnum;
  veiculo?: string;
  cidade?: string;
  dataInicial?: string;
  dataFinal?: string;
  placa?: string;
  renavam?: string;
  chassi?: string;
  statusAgendamento?: StatusAgendamentoEnum;
  idCliente?: string;
}

// --------

export interface IAgendamentosDoDiaDTO {
  agendamentos: IAgendamentoDaHoraDTO[];
  totalAgendamentos: number;
  vagas: number;
}

export interface IAgendamentoDaHoraDTO {
  agendamentos: IAgendamentoDTO[];
  horaAgendada: string;
}

// --------

export interface IPutAgendamentoProps extends IAgendamentoForm {
  uuid: string;
}

export interface IReagendamentoProps extends IReagendamentoForm {
  uuidAgendamento: string;
}

export interface IGetAgendamentosProps extends IPageRequest {
  loja?: string;
  nome?: string;
  cpfCnpj?: string;
  tipoAtendimento?: TipoAtendimentoEnum;
  veiculo?: string;
  cidade?: string;
  dataInicial?: string;
  dataFinal?: string;
  placa?: string;
  renavam?: string;
  chassi?: string;
  statusAgendamento?: StatusAgendamentoEnum;
  idCliente?: string;
}

export type DownloadProps = {
  cidade?: string;
  dia: string;
};

export interface IAgendamentoCadastroForm {
  uuidDelivery?: string;
  uuidLoja?: string;
  concessionaria?: boolean;
  uuidItinerante?: string;
}

export interface IAgendamentoCadastroFormFull extends IAgendamentoCadastroForm {
  diaAgendado: string;
  horaAgendada: string;
}

export interface IAgendamentoHorarioForm {
  diaAgendado: string;
  horaAgendada: string;
}

export interface IConfirmacaoHorarioProps extends IAgendamentoHorarioForm {
  uuid: string;
}

export interface IAtendimentoConcessionariaForm {
  nome: string;
  telefone: string;
  uuidConcessionaria: string;
}

export interface IAtendimentoConcessionariaProps
  extends IAtendimentoConcessionariaForm {
  uuid: string;
}

export interface IReembolsoForm {
  agencia?: string;
  codigoDoBanco?: string;
  chavepix?: string;
  conta?: string;
  operacao?: string;
  titular?: string;
}

export interface IReembolsoProps extends IReembolsoForm {
  uuid: string;
}

export interface IReembolsoConfirmarForm {
  uuid: string;
  dataDevolucao: string;
}
