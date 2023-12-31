import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave1 } from "./../../Apis/Brave1/index";
import { IPageLojaDTO } from "../../types/Loja";
import { ILocalTime } from "../../types/agendamento";

interface ILojaParams extends IPageRequest {
  nome?: string;
}

const basePath = "/loja";

export class Loja {
  static async get(props?: ILojaParams): Promise<AxiosResponse<IPageLojaDTO>> {
    return ApiBrave1.get(`${basePath}`);
  }

  static async getDiasIndisponiveis({
    uuidLoja,
  }: {
    uuidLoja: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave1.get(`${basePath}/${uuidLoja}/dias-indiponiveis`);
  }

  static async getHorariosDisponiveis({
    uuidLoja,
    dataAgendamento,
  }: {
    uuidLoja: string;
    dataAgendamento: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave1.get(
      `${basePath}/${uuidLoja}/horarios-disponiveis?dataAgendamento=${dataAgendamento}`
    );
  }
}
