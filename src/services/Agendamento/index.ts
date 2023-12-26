import { AxiosResponse } from "axios";
import { ApiAgendamento } from "../../Apis/Agendamento";
import {
  IAgendamentoBasicoForm,
  IAgendamentoDTO,
  IAgendamentoForm,
} from "../../types/agendamento";

const basePath = "/agendamento";

interface IPutAgendamentoProps extends IAgendamentoForm {
  uuid: string;
}
export class Agendamento {
  static async agendamento({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiAgendamento.get(`${basePath}/${uuid}`);
  }

  static async post(props: IAgendamentoBasicoForm) {
    return ApiAgendamento.post(basePath, props);
  }

  static async put(props: IPutAgendamentoProps) {
    const { uuid, ...rest } = props;
    return ApiAgendamento.put(`${basePath}/${uuid}`, rest);
  }
}
