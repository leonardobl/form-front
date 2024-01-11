import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { Veiculo } from "../../../services/Veiculo";
import { toast } from "react-toastify";
import { IVeiculoDTO } from "../../../types/agendamento";

export const InfoVehicleTemplate = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const [tipoAgendamento, setTipoAgendamento] =
    useSessionStorage("tipoAgendamento");
  const [veiculoSession, setVeiculoSession] = useSessionStorage("veiculo");

  const { setIsLoad } = useContextSite();
  const [veiculo, setVeiculo] = useState<IVeiculoDTO>({} as IVeiculoDTO);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!veiculo.uuid) return;
    setIsLoad(true);

    Veiculo.post(veiculo)
      .then(() => {
        if (tipoAgendamento === "LOJA") {
          window.open(`/pagamento/${agendamento}`, "_self");
          return;
        }
        window.open("/cadastro-endereco", "_self");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    if (!veiculoSession) return;

    setIsLoad(true);

    Veiculo.byId({ uuid: veiculoSession })
      .then(({ data }) => {
        setVeiculo(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }, [veiculoSession]);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <h1>Informações do veículo</h1>
          <S.Form onSubmit={handleSubmit}>
            <S.Grid>
              <S.TitleItemGrid>Modelo do carro</S.TitleItemGrid>
              <S.TitleItemGrid>Ano</S.TitleItemGrid>
              <S.TitleItemGrid>Placa</S.TitleItemGrid>
              <InputCustom readOnly value={veiculo?.modelo} />
              <InputCustom readOnly value={veiculo?.ano} />
              <InputCustom readOnly value={veiculo?.placa} />
            </S.Grid>
            <S.Grid>
              <S.TitleItemGrid>Chassi</S.TitleItemGrid>
              <S.TitleItemGrid>Renavam</S.TitleItemGrid>
              <S.TitleItemGrid>Tipo de veículo</S.TitleItemGrid>
              <InputCustom readOnly value={veiculo?.chassi} />
              <InputCustom readOnly value={veiculo?.renavam} />
              <InputCustom readOnly value={veiculo?.tipo} />
            </S.Grid>
            <S.WrapperBtn>
              <ButtonCustom typeOfButton="BlueLight">Confirmar</ButtonCustom>
            </S.WrapperBtn>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
