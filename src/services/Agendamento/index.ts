import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IAgendamentoBasicoForm,
  IAgendamentoDTO,
  IAgendamentoForm,
  IAtendimentoDomiciliarForm,
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
    return ApiBrave.get(`${basePath}/${uuid}`);
  }

  static async post(
    props: IAgendamentoBasicoForm
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    return ApiBrave.post(basePath, props);
  }

  static async put(props: IPutAgendamentoProps) {
    const { uuid, ...rest } = props;
    return ApiBrave.put(`${basePath}/${uuid}`, rest);
  }

  static async putAddress(props: IAtendimentoDomiciliarForm) {
    const { uuid, ...rest } = props;
    return ApiBrave.put(
      `${basePath}/${uuid}/atualizar-endereco-atendimento`,
      rest
    );
  }
}
