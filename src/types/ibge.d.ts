export interface IUFS {
  id: number;
  sigla: string;
  nome: string;
  regiao?: IUFS;
}

export interface IEstado {
  id: number;
  nome: string;
  municipio: IMunicipio;
}

export interface IMunicipio {
  id: number;
  nome: string;
  microrregiao: IMicrorregiao;
  "regiao-imediata": IRegiaoImediata;
}

export interface IMicrorregiao {
  id: number;
  nome: string;
  mesorregiao: IMesorregiao;
}

export interface IMesorregiao {
  id: number;
  nome: string;
  UF: IUf;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
  regiao?: IUf;
}

export interface IRegiaoImediata {
  id: number;
  nome: string;
  "regiao-intermediaria": IMesorregiao;
}
