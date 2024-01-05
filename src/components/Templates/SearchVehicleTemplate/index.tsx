import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { IAgendamentoBasicoForm } from "../../../types/agendamento";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Municipio } from "../../../services/Municipio";
import { ISelectOptions } from "../../../types/inputs";
import {
  IConsultaUnionProps,
  IConsultaVeiculoChassiForm,
  IConsultaVeiculoPlacaForm,
} from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";

export const SearchVehicleTemplate = () => {
  const [serviceStorage, setServiceStorage] = useSessionStorage("service");
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
    const agendamento = sessionAgendamento as IAgendamentoBasicoForm;
    setIsLoad(true);

    if (serviceStorage === "1Emplacamento") {
      const PAYLOAD: IConsultaVeiculoChassiForm = {
        Chassi: form.Chassi,
        CnpjECV: process.env.REACT_APP_BRAVE_CNPJ_ECV,
        IdCidadeDetran: form.IdCidadeDetran,
      };

      Veiculo.postByChassi(PAYLOAD)
        .then(({ data }) => {
          console.log(data);
          if (agendamento?.tipoAtendimento === "LOJA") {
            return window.open("/pagamento", "_self");
          }

          window.open("/cadastro-endereco", "_self");
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoad(false));

      return;
    }

    const PAYLOAD: IConsultaVeiculoPlacaForm = {
      Placa: form.Placa,
      CnpjECV: process.env.REACT_APP_BRAVE_CNPJ_ECV,
      IdCidadeDetran: form.IdCidadeDetran,
      Renavam: form.Renavam,
    };

    Veiculo.postByPlaca(PAYLOAD)
      .then(({ data }) => {
        console.log(data);
        if (agendamento?.tipoAtendimento === "LOJA") {
          return window.open("/pagamento", "_self");
        }

        window.open("/cadastro-endereco", "_self");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
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

          {serviceStorage === "1Emplacamento" ? (
            <S.Text>
              Digite a <S.TextBlue>chassi</S.TextBlue> e{" "}
              <S.TextBlue>cidade</S.TextBlue> do veículo para consultar os
              dados.
            </S.Text>
          ) : (
            <S.Text>
              Digite a <S.TextBlue>placa</S.TextBlue> e{" "}
              <S.TextBlue>renavam</S.TextBlue> e <S.TextBlue>cidade</S.TextBlue>{" "}
              do veículo para consultar os dados.
            </S.Text>
          )}
          <S.WrapperInputs
            $gridColumns={
              serviceStorage === "1Emplacamento" ? "1fr 1fr" : "1fr 1fr 1fr"
            }
            $gap={serviceStorage === "1Emplacamento" ? "0 70px" : "0 24px"}
          >
            <InputCustom
              type={serviceStorage === "1Emplacamento" ? "number" : "text"}
              label={serviceStorage === "1Emplacamento" ? "Chassi" : "Placa"}
              required
              value={
                serviceStorage === "1Emplacamento" ? form.Chassi : form.Placa
              }
              onChange={(e) => {
                serviceStorage === "1Emplacamento"
                  ? setForm((prev) => ({ ...prev, Chassi: e.target.value }))
                  : setForm((prev) => ({ ...prev, Placa: e.target.value }));
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

            <SimpleSelect
              required
              label="Cidade"
              options={municipiosOptions}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, IdCidadeDetran: e?.value }))
              }
              value={municipiosOptions.find(
                (item) => item.value === form?.IdCidadeDetran
              )}
            />
          </S.WrapperInputs>
          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
