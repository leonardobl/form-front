export interface IAuth {
  codigo: string;
  mensagemErro: null;
  retorno: IAuthReturn;
}

export interface IAuthReturn {
  siglaUf: string;
  siglaEmpresaHonda: string;
  nomeUsuario: string;
  codUsuario: string;
  nomeEmpresa: string;
  idConcessionaria: number;
  codEmpresa: string;
  segmentoConcessionaria: string;
  numCpf: string;
  tokenDigital: string;
  tokenType: string;
  expiresIn: number;
}
