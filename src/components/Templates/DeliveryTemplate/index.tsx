import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useDelivery } from "./useDeliveryAgente";
import { ISelectOptions } from "../../../types/inputs";
import { MyModal } from "../../Atoms/MyModal";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { Input } from "../../Atoms/Inputs/Input";
import { LocalAtendimentoEnum } from "../../../enums/localAtendimento";
import { maskPhone } from "../../../utils/masks";

export const DeliveryTemplate = () => {
  const {
    cidadesOptions,
    localOptions,
    form,
    setForm,
    reagendamentoForm,
    setReagendamentoForm,
    handleSubmit,
    isLoading,
    modalIsOpen,
    setModalIsOpen,
    diasIndisponiveis,
    horariosOptions,
    handleReagendamento,
    date,
    setDate,
    concessionarias,
    reagendamento,
  } = useDelivery();

  return (
    <S.Container>
      <Title>Delivery</Title>
      {!reagendamento ? (
        <S.Form onSubmit={handleSubmit}>
          <S.GridBaseForm>
            <div>
              <SimpleSelect
                options={cidadesOptions}
                label="Cidade"
                required
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, uuidDelivery: e?.value }))
                }
                value={cidadesOptions.find(
                  (item) => item.value === form?.uuidDelivery
                )}
              />
            </div>
            <div>
              <SimpleSelect
                isDisabled={!form?.uuidDelivery}
                options={localOptions}
                value={localOptions.find((item) => item.value === form?.local)}
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, local: e?.value }))
                }
                label="Local de Atendimento"
                required
              />
            </div>
          </S.GridBaseForm>

          {form?.local === "CONCESSIONARIA" && (
            <S.GridConcessionarieForm>
              <div>
                <Text>
                  Preencha o formulário com o
                  <span className="textStrong">
                    endereço de realização do atendimento
                  </span>
                  .
                </Text>
              </div>
              <div>
                <Input
                  label="Nome"
                  required
                  value={form?.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                />
              </div>

              <div>
                <Input
                  label="Telefone"
                  required
                  maxLength={15}
                  value={maskPhone(form?.telefone)}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, telefone: e.target.value }))
                  }
                />
              </div>
              <div>
                <SimpleSelect
                  label="Concessionária"
                  options={concessionarias}
                  required
                  value={
                    concessionarias.find(
                      (i) => i.value === form?.uuidConcessionaria
                    ) || null
                  }
                  onChange={(e: ISelectOptions) =>
                    setForm((prev) => ({
                      ...prev,
                      uuidConcessionaria: e.value,
                    }))
                  }
                />
              </div>
            </S.GridConcessionarieForm>
          )}

          <div id="buttonAdvanced">
            <Button>Avançar</Button>
          </div>
        </S.Form>
      ) : (
        <>
          <S.RescheduleForm onSubmit={handleSubmit}>
            <div>
              <SimpleSelect
                options={cidadesOptions}
                label="Cidade"
                required
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, uuidDelivery: e?.value }))
                }
                value={cidadesOptions.find(
                  (item) => item.value === reagendamentoForm.uuidDelivery
                )}
                isDisabled={true}
              />
            </div>
            <div>
              <SimpleSelect
                options={localOptions}
                value={localOptions.find(
                  (item) => item.value === reagendamentoForm?.localAtendimento
                )}
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, local: e?.value }))
                }
                label="Local de Atendimento"
                isDisabled={true}
                required
              />
            </div>
            <div>
              <Text>
                Datas e horários <span className="textStrong">disponíveis</span>
                .{" "}
              </Text>
            </div>
            <div>
              <InputDate
                showIcon
                isLoading={isLoading}
                minDate={new Date()}
                label="Data"
                required
                disabled={!!!reagendamentoForm?.uuidDelivery}
                excludeDates={diasIndisponiveis}
                onChange={(e) => {
                  setDate(e);
                }}
                placeholderText="__/__/__"
                selected={date}
              />
            </div>
            <div>
              <SimpleSelect
                label="Horário"
                isDisabled={!date}
                value={
                  horariosOptions?.find(
                    (item) => item.value === reagendamentoForm?.horaAgendada
                  ) || null
                }
                onChange={(e: ISelectOptions) =>
                  setReagendamentoForm((prev) => ({
                    ...prev,
                    horaAgendada: e?.value,
                  }))
                }
                options={horariosOptions}
                required
              />
            </div>
            <div>
              <Button>Avançar</Button>
            </div>
          </S.RescheduleForm>
          <MyModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <S.ModalContent>
              <S.HeaderModal>
                <S.WrapperButtonClose>
                  <button onClick={() => setModalIsOpen(false)}>X</button>
                </S.WrapperButtonClose>
              </S.HeaderModal>
              <S.WrapperText>
                <p>
                  <span>Confirma</span> sua vistoria para o{" "}
                  <span>
                    dia {reverseToBrDate(date?.toLocaleDateString())} às{" "}
                    {reagendamentoForm.horaAgendada} ?
                  </span>
                </p>
                <S.WrapperButtonsModal>
                  <button onClick={() => setModalIsOpen(false)}>
                    Cancelar
                  </button>
                  <Button onClick={handleReagendamento}>Confirmar</Button>
                </S.WrapperButtonsModal>
              </S.WrapperText>
            </S.ModalContent>
          </MyModal>
        </>
      )}
    </S.Container>
  );
};
