import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IAgendamentoBasicoForm,
  IAgendamentoDTO,
  IAgendamentoDaHoraDTO,
  IAgendamentoForm,
  IAtendimentoDomiciliarForm,
  IPageAgendamentoDTO,
  IReagendamentoForm,
} from "../../types/agendamento";
import { IPageRequest } from "../../types/page";
import { TipoAtendimentoEnum } from "../../enums/tipoAtendimento";
import { StatusAgendamentoEnum } from "../../enums/statusAgendamento";
import objectToParams from "../../utils/objectToParams";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/agendamento";

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

type AgendamentoByHourProps = {
  data?: string;
  status?: StatusAgendamentoEnum[];
};

function propsToString(props: AgendamentoByHourProps) {
  if (props?.data && props?.status) {
    const statusString = props?.status?.join(",");
    return `data=${props?.data}&status=${statusString}`;
  }
  if (props?.data) {
    return `data=${props?.data}`;
  }
  return `status=${props?.status.join(",")}`;
}

export class Agendamento {
  static async get(
    props?: IGetAgendamentosProps
  ): Promise<AxiosResponse<IPageAgendamentoDTO>> {
    const params = objectToParams(props);
    return ApiBrave.get(params ? `${basePath}?${params}` : basePath);
  }

  static async getById({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.get(`${basePath}/${uuid}`);
  }

  static getByHour(
    props: AgendamentoByHourProps
  ): Promise<AxiosResponse<IAgendamentoDaHoraDTO[]>> {
    const path = propsToString(props);
    return ApiBrave.get(`${basePath}/listar-por-horario?${path}`);
  }

  static async post(
    props: IAgendamentoBasicoForm
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.post(basePath, props);
  }

  static async put(props: IPutAgendamentoProps) {
    const { uuid, ...rest } = props;
    const params = removeEmpty(rest);
    return ApiBrave.put(`${basePath}/${uuid}`, params);
  }

  static async putAddress(props: IAtendimentoDomiciliarForm) {
    const { uuid, ...rest } = props;
    return ApiBrave.put(
      `${basePath}/${uuid}/atualizar-endereco-atendimento`,
      rest
    );
  }

  static async reagendar(
    props: IReagendamentoProps
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    const { uuidAgendamento, ...rest } = props;

    return ApiBrave.put(`${basePath}/${uuidAgendamento}/reagendar`, rest);
  }

  static async iniciar({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuid}/iniciar`);
  }

  static async cancelar({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuid}/cancelar`);
  }

  static async confirmarPagamento({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuid}/confirmacao-manual`);
  }

  static async vincularAgendamentoAoCliente({
    uuidAgendamento,
    uuidCliente,
  }: {
    uuidAgendamento: string;
    uuidCliente: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuidAgendamento}/vincular-cliente`, {
      uuid: uuidCliente,
    });
  }

  static async vincularAgendamentoAoVeiculo({
    uuidAgendamento,
    uuidVeiculo,
  }: {
    uuidAgendamento: string;
    uuidVeiculo: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuidAgendamento}/vincular-veiculo`, {
      uuid: uuidVeiculo,
    });
  }
}
