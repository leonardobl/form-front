import { AxiosResponse } from "axios";
import { ApiBrave1 } from "../../Apis/Brave1";
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
    return ApiBrave1.get(`${basePath}/${uuid}`);
  }

  static async post(props: IAgendamentoBasicoForm) {
    return ApiBrave1.post(basePath, props);
  }

  static async put(props: IPutAgendamentoProps) {
    const { uuid, ...rest } = props;
    return ApiBrave1.put(`${basePath}/${uuid}`, rest);
  }
}
