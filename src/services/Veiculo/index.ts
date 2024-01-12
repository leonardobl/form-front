import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IConsultaVeiculoChassiForm,
  IConsultaVeiculoPlacaForm,
  IVeiculoDTO,
  IVeiculoForm,
} from "../../types/veiculo";

const basePath = "/veiculo";

export class Veiculo {
  static async byId({
    uuid,
  }: {
    uuid: string;
  }): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.get(`${basePath}/${uuid}`);
  }

  static async post(props: IVeiculoForm): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(basePath, props);
  }

  static async postByChassi(
    props: IConsultaVeiculoChassiForm
  ): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(`${basePath}/consultar-por-chassi`, props);
  }

  static async postByPlaca(
    props: IConsultaVeiculoPlacaForm
  ): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(`${basePath}/consultar-por-placa`, props);
  }
}
