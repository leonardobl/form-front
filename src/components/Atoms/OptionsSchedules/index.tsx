import React from "react";
import * as S from "./styles";
import { useOptionsSchedules } from "./useOptionsSchedules";
import { SimpleSelect } from "../Selects/SimpleSelect";
import { Button } from "../Button";
import {
  IAgendamentoDTO,
  IIniciarAgendamentoProps,
} from "../../../types/agendamento";
import { CustomConfirmModal } from "../CustomConfirmModal";
import { ISelectOptions } from "../../../types/inputs";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

type OptionsSchedulesProps = {
  agendamento: IAgendamentoDTO;
  onStartSchedule: (data: IIniciarAgendamentoProps) => void;
  onAssignSchedule: (data: IIniciarAgendamentoProps) => void;
};

export const OptionsSchedules = ({
  agendamento,
  onAssignSchedule,
  onStartSchedule,
}: OptionsSchedulesProps) => {
  const {
    isCliente,
    isOpen,
    setIsOpen,
    disabled,
    isAdmin,
    modalAtribuir,
    setModalAtribuir,
    baitasOptions,
    vistoriadoresOptions,
    modalStart,
    setModalStart,
    Controller,
    control,
    handleSubmit,
  } = useOptionsSchedules();

  return (
    <S.Container>
      <img
        data-disabled={disabled}
        src="/assets/svgs/dots.svg"
        alt="dots"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <S.Menu data-open={isOpen}>
        {agendamento.status === "AGENDADO" && !isCliente && (
          <div>
            <button
              onClick={() => {
                setModalStart({ open: true, agendamento });
                setIsOpen(false);
              }}
            >
              Iniciar
            </button>
          </div>
        )}
        {agendamento.status === "AGENDADO" &&
          isAdmin &&
          agendamento?.tipoAtendimento === TipoAtendimentoEnum.DOMICILIO && (
            <div>
              <button
                onClick={() => {
                  setModalAtribuir({ open: true, agendamento });
                  setIsOpen(false);
                }}
              >
                Atribuir
              </button>
            </div>
          )}
      </S.Menu>

      <CustomConfirmModal
        isOpen={modalStart?.open}
        onRequestClose={() => setModalStart({ open: false })}
      >
        <S.formModal
          onSubmit={handleSubmit((data) => {
            onStartSchedule(data);
            setModalStart({ open: false });
          })}
        >
          <S.HeaderModal>
            <S.WrapperButtonClose>
              <button onClick={() => setModalStart({ open: false })}>X</button>
            </S.WrapperButtonClose>
          </S.HeaderModal>
          <S.WrapperText>
            <p>
              {`Escolha `}
              <b>
                {agendamento?.tipoAtendimento === TipoAtendimentoEnum.LOJA &&
                  `a baia de atendimento e `}
              </b>
              <b>{`o vistoriador `}</b>
              {`a qual será atribuída a vistoria.`}
            </p>
            {agendamento?.tipoAtendimento === TipoAtendimentoEnum.LOJA && (
              <div>
                <Controller
                  control={control}
                  name="uuidBaia"
                  render={({ field: { value, onChange } }) => (
                    <SimpleSelect
                      options={baitasOptions}
                      label="Baia de Atendimento"
                      value={baitasOptions?.find(
                        (item) => item?.value === value
                      )}
                      onChange={(e: ISelectOptions) => onChange(e.value)}
                      required
                    />
                  )}
                />
              </div>
            )}
            <div>
              <Controller
                control={control}
                name="uuidVistoriador"
                render={({ field: { onChange, value } }) => (
                  <SimpleSelect
                    options={vistoriadoresOptions}
                    required
                    label="Vistoriador"
                    value={vistoriadoresOptions?.find(
                      (item) => item?.value === value
                    )}
                    onChange={(e: ISelectOptions) => onChange(e.value)}
                  />
                )}
              />
            </div>
            <S.WrapperButtonsModal>
              <Button
                data-variant-text
                type="reset"
                onClick={() => {
                  setModalStart({ open: false });
                }}
              >
                Cancelar
              </Button>
              <Button>Salvar</Button>
            </S.WrapperButtonsModal>
          </S.WrapperText>
        </S.formModal>
      </CustomConfirmModal>

      <CustomConfirmModal
        isOpen={modalAtribuir?.open}
        onRequestClose={() => setModalAtribuir({ open: false })}
      >
        <S.ContentModal>
          <S.WrapperButtonX>
            <p onClick={() => setModalAtribuir({ open: false })}>X</p>
          </S.WrapperButtonX>

          <p>
            Escolha o <span className="textStrong">vistoriador</span> a qual
            será atribuída a vistoria móvel.
          </p>

          <S.FormAtribuir
            onSubmit={handleSubmit((data) => {
              onAssignSchedule(data);
              setModalAtribuir({ open: false });
            })}
          >
            <div>
              <Controller
                control={control}
                name="uuidVistoriador"
                render={({ field: { onChange, value } }) => (
                  <SimpleSelect
                    options={vistoriadoresOptions}
                    required
                    label="Vistoriador"
                    value={vistoriadoresOptions?.find(
                      (item) => item?.value === value
                    )}
                    onChange={(e: ISelectOptions) => onChange(e.value)}
                  />
                )}
              />
            </div>

            <S.ButtonsForm>
              <button
                type="reset"
                onClick={() => {
                  setModalAtribuir({ open: false });
                }}
                id="cancel"
              >
                Cancelar
              </button>
              <Button>Confirmar</Button>
            </S.ButtonsForm>
          </S.FormAtribuir>
        </S.ContentModal>
      </CustomConfirmModal>
    </S.Container>
  );
};
