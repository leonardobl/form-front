import React from "react";
import * as S from "./styles";
import { useOptionsSchedules } from "./useOptionsSchedules";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Modal } from "@mui/material";
import { Text } from "../Text";
import { SimpleSelect } from "../Selects/SimpleSelect";
import { Button } from "../Button";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { CustomConfirmModal } from "../CustomConfirmModal";
import { resetValues } from "../../../utils/resetObject";
import { ISelectOptions } from "../../../types/inputs";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";

type OptionsSchedulesProps = {
  agendamento: IAgendamentoDTO;
};

export const OptionsSchedules = ({ agendamento }: OptionsSchedulesProps) => {
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
    iniciarVistoria,
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
              }}
            >
              Iniciar
            </button>
          </div>
        )}
        {agendamento.status === "AGENDADO" && isAdmin && (
          <div>
            <button
              onClick={() => {
                setModalAtribuir({ open: true, agendamento });
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
        <S.formModal onSubmit={iniciarVistoria}>
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
                <SimpleSelect
                  options={baitasOptions}
                  label="Baia de Atendimento"
                  value={baitasOptions?.find(
                    (item) => item?.value === modalStart?.formStar?.uuidBaia
                  )}
                  onChange={(e: ISelectOptions) =>
                    setModalStart((prev) => ({
                      ...prev,
                      formStar: { ...prev.formStar, uuidBaia: e?.value },
                    }))
                  }
                  required
                />
              </div>
            )}
            <div>
              <SimpleSelect
                options={vistoriadoresOptions}
                required
                label="Vistoriador"
                value={vistoriadoresOptions?.find(
                  (item) =>
                    item?.value === modalStart?.formStar?.uuidVistoriador
                )}
                onChange={(e: ISelectOptions) =>
                  setModalStart((prev) => ({
                    ...prev,
                    formStar: { ...prev, uuidVistoriador: e?.value },
                  }))
                }
              />
            </div>
            <S.WrapperButtonsModal>
              <Button
                data-variant-danger
                type="button"
                onClick={() => {
                  const reset = resetValues(modalStart);
                  setModalStart({ ...reset, open: false });
                }}
              >
                Cancelar
              </Button>
              <Button>Salvar</Button>
            </S.WrapperButtonsModal>
          </S.WrapperText>
        </S.formModal>
      </CustomConfirmModal>

      <Modal
        open={modalAtribuir?.open}
        onClose={() => setModalAtribuir({ open: false })}
      >
        <S.ContentModal>
          <Text>
            Escolha o <span className="textStrong">vistoriador</span> a qual
            será atribuída a vistoria móvel.
          </Text>
          <SimpleSelect
            options={vistoriadoresOptions}
            required
            label="Vistoriador"
            value={vistoriadoresOptions?.find(
              (item) => item?.value === modalAtribuir?.formStar?.uuidVistoriador
            )}
            onChange={(e: ISelectOptions) =>
              setModalAtribuir((prev) => ({
                ...prev,
                formStar: { ...prev, uuidVistoriador: e?.value },
              }))
            }
          />
          <Button>Confirmar</Button>
        </S.ContentModal>
      </Modal>
    </S.Container>
  );
};
