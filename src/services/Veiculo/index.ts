import { ApiBrave1 } from "../../Apis/Brave1";
import { IVeiculoForm } from "../../types/veiculo";

const basePath = "/veiculo";

export class Veiculo {
  static async post(props: IVeiculoForm) {
    return ApiBrave1.post(basePath, props);
  }
}
