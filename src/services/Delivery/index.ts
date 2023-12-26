import { AxiosResponse } from "axios";
import { ApiBrave1 } from "../../Apis/Brave1";
import { removeEmpty } from "../../utils/removeEmpty";
import { IPageDeliveryDTO } from "../../types/delivery";
import { ILocalTime } from "../../types/agendamento";

const basePath = "/delivery";

type GetDeliveryProps = {
  cidad?: string;
  page?: number;
  size?: number;
  sort?: string;
};

export class Delivery {
  static async get(
    props: GetDeliveryProps
  ): Promise<AxiosResponse<IPageDeliveryDTO>> {
    const params = removeEmpty(props);
    return params
      ? ApiBrave1.get(`${basePath}?${params}`)
      : ApiBrave1.get(basePath);
  }

  static async getDiasIndisponiveis({
    uuidDelivery,
  }: {
    uuidDelivery: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave1.get(`${basePath}/${uuidDelivery}/dias-indiponiveis`);
  }

  static async getHorariosDisponiveis({
    uuidDelivery,
    dataAgendamento,
  }: {
    uuidDelivery: string;
    dataAgendamento: string;
  }): Promise<AxiosResponse<ILocalTime[]>> {
    return ApiBrave1.get(
      `${basePath}/${uuidDelivery}/horarios-disponiveis?dataAgendamento=${dataAgendamento}`
    );
  }
}
