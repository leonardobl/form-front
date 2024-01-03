import { ApiBrave } from "../../Apis/Brave";
import { IVeiculoForm } from "../../types/veiculo";

const basePath = "/veiculo";

export class Veiculo {
  static async post(props: IVeiculoForm) {
    return ApiBrave.post(basePath, props);
  }
}
