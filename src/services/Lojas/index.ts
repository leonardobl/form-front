import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave } from "../../Apis/Brave/index";
import {
  IBaiaDTO,
  IBaiaForm,
  IColaboradorDTO,
  IColaboradorForm,
  ILojaAtualizarForm,
  ILojaAtualizarFormProps,
  ILojaCompletaDTO,
  ILojaDTO,
  ILojaForm,
  IPageLojaDTO,
} from "../../types/loja";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";

interface ILojaParams extends IPageRequest {
  nome?: string;
  cidade?: string;
  ativo?: boolean;
}

interface ICadastroAtendenteProps extends IColaboradorForm {
  uuidLoja: string;
}

interface ICadastroBaiaProps extends IBaiaForm {
  uuidLoja: string;
}

const basePath = "/loja";

export class Loja {
  static async get(props?: ILojaParams): Promise<AxiosResponse<IPageLojaDTO>> {
    const params = objectToParams(props);

    return ApiBrave.get(params ? `${basePath}?${params}` : `${basePath}`);
  }

  static async getById({
    uuidLoja,
  }: {
    uuidLoja: string;
  }): Promise<AxiosResponse<ILojaCompletaDTO>> {
    return ApiBrave.get(`${basePath}/${uuidLoja}`);
  }

  static async cadastro(data: ILojaForm): Promise<AxiosResponse<ILojaDTO>> {
    const PAYLOAD = removeEmpty(data);
    return ApiBrave.post(`${basePath}/cadastrar`, PAYLOAD);
  }

  static async atualizar(
    data: ILojaAtualizarFormProps
  ): Promise<AxiosResponse<ILojaDTO>> {
    const { uuidLoja, ...rest } = data;
    return ApiBrave.post(`${basePath}/${uuidLoja}/atualizar`, rest);
  }

  static async getDiasIndisponiveis({
    uuidLoja,
  }: {
    uuidLoja: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(`${basePath}/${uuidLoja}/dias-indiponiveis`);
  }

  static async getHorariosDisponiveis({
    uuidLoja,
    dataAgendamento,
  }: {
    uuidLoja: string;
    dataAgendamento: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(
      `${basePath}/${uuidLoja}/horarios-disponiveis?dataAgendamento=${dataAgendamento}`
    );
  }

  static async getAtendentes({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IColaboradorDTO[]>> {
    return ApiBrave.get(`${basePath}/${uuid}/atendentes`);
  }

  static async getAtendentesLivres({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IColaboradorDTO[]>> {
    return ApiBrave.get(`${basePath}/${uuid}/atendentes-livres`);
  }

  static async getBaias({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IBaiaDTO[]>> {
    return ApiBrave.get(`${basePath}/${uuid}/baias`);
  }

  static async getBaiasLivres({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IBaiaDTO[]>> {
    return ApiBrave.get(`${basePath}/${uuid}/baias-livres`);
  }

  static async cadastroBaia(
    props: ICadastroBaiaProps
  ): Promise<AxiosResponse<IBaiaDTO>> {
    const { uuidLoja, ...rest } = props;
    return ApiBrave.put(`${basePath}/${uuidLoja}/baias`, rest);
  }

  static async cadastroAtendente(
    props: ICadastroAtendenteProps
  ): Promise<AxiosResponse<IColaboradorDTO[]>> {
    const { uuidLoja, ...rest } = props;
    return ApiBrave.put(`${basePath}/${uuidLoja}/atendentes/cadastrar`, rest);
  }
}
