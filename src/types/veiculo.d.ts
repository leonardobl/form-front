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
  CnpjECV: string;
  IdCidadeDetran: number;
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
  CnpjECV: string;
  IdCidadeDetran: number;
  Placa: string;
  Renavam: string;
}

export interface IConsultaUnionProps {
  CnpjECV: string;
  Placa?: string;
  Renavam?: string;
  Chassi?: string;
  IdCidadeDetran: number;
}
