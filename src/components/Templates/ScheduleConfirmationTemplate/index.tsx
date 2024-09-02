import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useScheduleConfirmation } from "./useScheduleConfirmation";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
import { ISelectOptions } from "../../../types/inputs";
import { MyModal } from "../../Atoms/MyModal";
import { Input } from "../../Atoms/Inputs/Input";
import { maskCep } from "../../../utils/masks";
import { Title } from "../../Atoms/Title";

export const ScheduleConfirmationTemplate = () => {
  const {
    diasIndisponiveis,
    date,
    setDate,
    horarios,
    form,
    setForm,
    onSubmit,
    isOpen,
    setIsOpen,
    handleReagendamento,
    disable,
    itinerante,
  } = useScheduleConfirmation();

  return (
    <S.Container onSubmit={onSubmit}>

      {itinerante &&
        <S.Endereco>
          <div>
            <Title>Endereço de Realização</Title>
          </div>
          <div>
            <Input
              disabled
              label="CEP"
              value={maskCep(itinerante?.endereco?.cep)} />
          </div>
          <div>
            <Input
              disabled
              label="Endereço (Rua)"
              value={itinerante?.endereco?.logradouro} />
          </div>
          <div>
            <Input
              disabled
              label="Número"
              value={itinerante?.endereco?.numero} />
          </div>
          <div>
            <Input
              disabled
              label="Complemento"
              value={itinerante?.endereco?.complemento} />
          </div>
          <div>
            <Input
              disabled
              label="Bairro"
              value={itinerante?.endereco?.bairro} />
          </div>
          <div>
            <Input disabled label="UF" value={itinerante?.endereco?.uf} />
          </div>
          <div>
            <Input
              disabled
              label="Cidade"
              value={itinerante?.endereco?.cidade} />
          </div>
        </S.Endereco>
      }

      <Text>
        Agende a sua vistoria! Escolha a <b>data e hora disponível</b> que
        preferir.
      </Text>

      <S.Grid>
        <div>
          <InputDate
            placeholderText="___/___/___"
            disabled={disable}
            showIcon
            label="Data"
            minDate={new Date()}
            required
            selected={date}
            excludeDates={diasIndisponiveis}
            onChange={(e) => {
              setDate(e);
              setForm((prev) => ({
                ...prev,
                diaAgendado: reverseToIsoDate(e?.toLocaleDateString()),
              }));
            }}
          />
        </div>
        <div>
          <SimpleSelect
            isDisabled={!date}
            label="Horário"
            required
            options={horarios}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({ ...prev, horaAgendada: e?.value }))
            }
            value={
              horarios.find((item) => item?.value === form?.horaAgendada) ||
              null
            }
          />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Grid>

      <MyModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
            date?.toLocaleDateString()
          )} às ${form.horaAgendada}? `}</p>
          <Button onClick={handleReagendamento}>Confirmar</Button>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
