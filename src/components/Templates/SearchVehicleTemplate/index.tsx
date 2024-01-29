import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";

import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Municipio } from "../../../services/Municipio";
import { ISelectOptions } from "../../../types/inputs";
import {
  IConsultaUnionProps,
  IConsultaVeiculoChassiForm,
  IConsultaVeiculoPlacaForm,
} from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";
import { removerCaracteresEspeciais } from "../../../utils/masks";

export const SearchVehicleTemplate = () => {
  const [serviceStorage, setServiceStorage] = useSessionStorage("servico");
  const [sessionVeiculo, setSessionVeiculo] = useSessionStorage("veiculo");
  const [sessionAgendamento, setSessionAgendamento] =
    useSessionStorage("agendamento");

  const [municipiosOptions, setMunicipiosOptions] = useState<ISelectOptions[]>(
    []
  );

  const { setIsLoad } = useContextSite();

  const [form, setForm] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    if (serviceStorage === "Emplacamento") {
      // const PAYLOAD: IConsultaVeiculoChassiForm = {
      //   Chassi: form.Chassi,
      //   CnpjECV: process.env.REACT_APP_BRAVE_CNPJ_ECV,
      //   IdCidadeDetran: Number(form.IdCidadeDetran),
      // };

      const PAYLOAD: IConsultaVeiculoChassiForm = {
        Chassi: form.Chassi,
        CnpjECV: null,
        IdCidadeDetran: null,
        uuidAgendamento: sessionAgendamento?.uuid,
      };

      Veiculo.postByChassi(PAYLOAD)

        .then(({ data }) => {
          setSessionVeiculo(data.uuid);
          window.open(`/informacoes-veiculo`, "_self");
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem, { autoClose: 4000 })
        )
        .finally(() => setIsLoad(false));

      return;
    }

    // const PAYLOAD: IConsultaVeiculoPlacaForm = {
    //   Placa: form.Placa,
    //   CnpjECV: process.env.REACT_APP_BRAVE_CNPJ_ECV,
    //   IdCidadeDetran: Number(form.IdCidadeDetran),
    //   Renavam: form.Renavam,
    // };
    const PAYLOAD: IConsultaVeiculoPlacaForm = {
      Placa: form.Placa,
      CnpjECV: null,
      IdCidadeDetran: null,
      Renavam: form.Renavam,
      uuidAgendamento: sessionAgendamento?.uuid,
    };

    Veiculo.postByPlaca(PAYLOAD)
      .then(({ data }) => {
        setSessionVeiculo(data.uuid);
        window.open(`/informacoes-veiculo`, "_self");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem, { autoClose: 4000 })
      )
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    Municipio.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.codigoDetran,
          label: item.nome,
          element: item,
        }));

        setMunicipiosOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      );
  }, []);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Buscar Veículo</S.Title>

          {serviceStorage === "Emplacamento" ? (
            <S.Text>
              Digite o <S.TextBlue>chassi</S.TextBlue> do veículo para consultar
              os dados.
            </S.Text>
          ) : (
            <S.Text>
              Digite a <S.TextBlue>placa</S.TextBlue> e{" "}
              <S.TextBlue>renavam</S.TextBlue> do veículo para consultar os
              dados.
            </S.Text>
          )}
          <S.WrapperInputs
            $gridColumns={
              serviceStorage === "Emplacamento" ? "1fr 1fr" : "1fr 1fr 1fr"
            }
            $gap={serviceStorage === "Emplacamento" ? "0 70px" : "0 24px"}
          >
            <InputCustom
              label={serviceStorage === "Emplacamento" ? "Chassi" : "Placa"}
              required
              value={
                serviceStorage === "Emplacamento" ? form.Chassi : form.Placa
              }
              onChange={(e) => {
                serviceStorage === "Emplacamento"
                  ? setForm((prev) => ({
                      ...prev,
                      Chassi: removerCaracteresEspeciais(e.target.value),
                    }))
                  : setForm((prev) => ({
                      ...prev,
                      Placa: removerCaracteresEspeciais(e.target.value),
                    }));
              }}
            />
            {serviceStorage === "Vistoria" && (
              <InputCustom
                label="Renavam"
                required
                type="number"
                value={form.Renavam}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, Renavam: e.target.value }))
                }
              />
            )}

            {/* <SimpleSelect
              required
              label="Cidade"
              options={municipiosOptions}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, IdCidadeDetran: e?.value }))
              }
              value={municipiosOptions.find(
                (item) => item.value === form?.IdCidadeDetran
              )}
            /> */}
          </S.WrapperInputs>
          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
