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

export const SearchVehicleTemplate = () => {
  const [serviceStorage, setServiceStorage] = useSessionStorage("service");
  const [sessionAgendamento, setSessionAgendamento] =
    useSessionStorage("agendamento");

  const [municipiosOptions, setMunicipiosOptions] = useState<ISelectOptions[]>(
    []
  );

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const agendamento = sessionAgendamento as IAgendamentoBasicoForm;

    if (agendamento?.tipoAtendimento === "LOJA") {
      return window.open("/pagamento", "_self");
    }

    return window.open("/cadastro-endereco", "_self");
  }

  useEffect(() => {
    if (serviceStorage !== "1Emplacamento") {
      Municipio.get()
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));

          setMunicipiosOptions(options);
        })
        .catch((error) => {
          toast.error(JSON.stringify(error));
        });
    }
  }, []);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Buscar Veículo</S.Title>

          <S.Text>
            Digite a{" "}
            <S.TextBlue>
              {serviceStorage === "1Emplacamento" ? "chassi" : "placa"}
            </S.TextBlue>{" "}
            e <S.TextBlue>renavam</S.TextBlue> do veículo para consultar os
            dados.
          </S.Text>
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
            />
            <InputCustom label="Renavam" required type="number" />

            {serviceStorage !== "1Emplacamento" && (
              <SimpleSelect
                required
                label="Cidade"
                options={municipiosOptions}
              />
            )}
          </S.WrapperInputs>
          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
