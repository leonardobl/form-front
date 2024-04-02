import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IAgendamentoBasicoForm,
  IAgendamentoDTO,
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

type DownloadProps = {
  cidade?: string;
  dia: string;
};

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

  static async downloadExc(props: DownloadProps) {
    const token = sessionStorage.getItem("@token");
    let path = `${process.env.REACT_APP_BRAVE_API_URL}${basePath}/listar-deliveries?dia=${props.dia}`;

    if (props?.cidade) {
      path = `${process.env.REACT_APP_BRAVE_API_URL}${basePath}/listar-deliveries?dia=${props.dia}&cidade=${props.cidade}`;
    }

    const response = await fetch(path, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.replaceAll('"', ""),
      },
    });
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "relatorio.xlsx";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
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
