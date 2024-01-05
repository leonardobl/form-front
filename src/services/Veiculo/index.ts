import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IConsultaVeiculoChassiForm,
  IConsultaVeiculoPlacaForm,
  IVeiculoForm,
} from "../../types/veiculo";
import { IVeiculoDTO } from "../../types/agendamento";

const basePath = "/veiculo";

export class Veiculo {
  static async post(props: IVeiculoForm): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(basePath, props);
  }

  static async postByChassi(
    props: IConsultaVeiculoChassiForm
  ): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(`${basePath}/consulta-por-chassi`, props);
  }

  static async postByPlaca(
    props: IConsultaVeiculoPlacaForm
  ): Promise<AxiosResponse<IVeiculoDTO>> {
    return ApiBrave.post(`${basePath}/consulta-por-placa`, props);
  }
}
