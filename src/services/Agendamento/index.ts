import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  AgendamentoByHourProps,
  DownloadProps,
  IAgendamentoBasicoForm,
  IAgendamentoCadastroForm,
  IAgendamentoDTO,
  IAgendamentosDoDiaDTO,
  IAtendimentoDomiciliarForm,
  IConfirmacaoHorarioProps,
  IGetAgendamentosProps,
  IIniciarAgendamentoProps,
  IPageAgendamentoDTO,
  IPutAgendamentoProps,
  IReagendamentoProps,
} from "../../types/agendamento";

import objectToParams from "../../utils/objectToParams";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/agendamento";

function propsToString(params: AgendamentoByHourProps): string {
  const result = params
    ? Object.entries(params)
        .map((e) =>
          Array.isArray(e[1]) ? `${e[0]}=${e[1].join(",")}` : e.join("=")
        )
        .flat()
        .join("&")
    : "";

  return result;
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
  ): Promise<AxiosResponse<IAgendamentosDoDiaDTO>> {
    const path = propsToString(props);
    return ApiBrave.get(`${basePath}/listar-por-horario?${path}`);
  }

  static async post(
    props: IAgendamentoBasicoForm
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.post(basePath, props);
  }

  static async postV2(
    props: IAgendamentoCadastroForm
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.post(`${basePath}/v2`, props);
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

  static async iniciar(
    props: IIniciarAgendamentoProps
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    const { uuid, ...rest } = props;
    return ApiBrave.put(`${basePath}/${uuid}/iniciar`, rest);
  }

  static async downloadExc(props: DownloadProps) {
    const token = localStorage.getItem("@token");
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

  static async definirHorario(
    props: IConfirmacaoHorarioProps
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    const { uuid, ...rest } = props;
    return ApiBrave.put(`${basePath}/${uuid}/definir-horario`, rest);
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

  static async retornarStatusIniciado({
    uuid,
  }:{
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.put(`${basePath}/${uuid}/retornar-status-iniciado`);
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

  static async colocarEmEspera({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.post(
      `${basePath}/${uuidAgendamento}/alterar-em-espera`,
      true
    );
  }
}
