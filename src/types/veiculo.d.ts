import { tipoVeiculoEnum } from "../enums/tipoVeiculo";

export interface IVeiculoForm {
  ano: string;
  chassi: string;
  modelo: string;
  placa: string;
  renavam: string;
  tipo: tipoVeiculoEnum;
}

export interface IConsultaVeiculoChassiForm {
  Chassi: string;
  CnpjECV?: string | null;
  IdCidadeDetran?: number | null;
  uuidAgendamento: string;
}

export interface IVeiculoDTO {
  ano: string;
  chassi: string;
  modelo: string;
  placa: string;
  renavam: string;
  tipo: tipoVeiculoEnum;
  uuid: string;
}

export interface IConsultaVeiculoPlacaForm {
  CnpjECV?: string;
  IdCidadeDetran?: number;
  Placa: string;
  Renavam: string;
  uuidAgendamento: string;
}

export interface IConsultaUnionProps {
  CnpjECV: string;
  Placa?: string;
  uuidAgendamento?: string;
  Renavam?: string;
  Chassi?: string;
  IdCidadeDetran?: number;
}
