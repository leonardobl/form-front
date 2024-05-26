import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { useStores } from "./useStores";
import { ButtonDots } from "../../Atoms/ButtonDots";
import { IconEye } from "../../Atoms/IconEye";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { CustomConfirmModal } from "../../Atoms/CustomConfirmModal";
import { Status } from "../../Atoms/Status";
import { ISelectOptions } from "../../../types/inputs";
import { resetValues } from "../../../utils/resetObject";

export const StoresTemplate = () => {
  const {
    agendamentos,
    iniciarVistoria,
    agendamentosEmEspera,
    handleWait,
    modalStart,
    setModalStart,
    vistoriadoresOptions,
    baitasOptions,
    isMobile,
    dataAgendamento,
  } = useStores();

  return (
    <S.Container>
      <Title>Atendimento Loja</Title>

      <S.WrapperInfo>
        <p>N° de Vagas: {dataAgendamento?.vagas}</p>
        <p>N° Agendamentos: {dataAgendamento?.totalAgendamentos}</p>
      </S.WrapperInfo>

      {agendamentos?.map((item) => (
        <S.Wrapper key={Math.random()}>
          <S.GridHeader>
            <p>{item?.horaAgendada}</p>
            <div className="gridItemFake"></div>
          </S.GridHeader>
          <S.GridBody>
            <div></div>
            <S.Body>
              <S.HeaderBody>
                <h4>Cliente</h4>
                <h4>Veículo</h4>
                <h4>Placa</h4>
                <h4>Chassi</h4>
                <h4>Status</h4>
                <span></span>
              </S.HeaderBody>
              {item?.agendamentos?.map((_) =>
                isMobile ? (
                  <S.BodyItem key={Math.random()}>
                    <div className="wrapperMobile">
                      <p>
                        {_?.veiculo?.placa || "---"} /{" "}
                        {_?.veiculo?.chassi || "---"}
                      </p>{" "}
                      <Status status={_?.status} />
                    </div>
                    <S.WrapperActions>
                      <IconEye
                        data-color-starcheck={
                          process.env.REACT_APP_PROJECT === "starcheck"
                        }
                        data-color-log={process.env.REACT_APP_PROJECT === "log"}
                        data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                        data-color-tokyo={
                          process.env.REACT_APP_PROJECT === "tokyo"
                        }
                        onClick={() =>
                          window.open(
                            `/meus-agendamentos/agendamento?id=${_.uuid}`,
                            "_blank"
                          )
                        }
                        src="/assets/svgs/eye.svg"
                        alt="olho"
                      />
                      <ButtonDots
                        statusAgendamento={_?.status}
                        handleWait={() => handleWait({ uuid: _.uuid })}
                        handleStart={() =>
                          setModalStart({
                            open: true,
                            uuid: _?.uuid,
                          })
                        }
                      />
                    </S.WrapperActions>
                  </S.BodyItem>
                ) : (
                  <S.BodyItem key={Math.random()}>
                    <p>{_?.cliente?.nome || "---"}</p>
                    <p>{_?.veiculo?.modelo || "---"}</p>
                    <p>{_?.veiculo?.placa || "---"}</p>
                    <p>{_?.veiculo?.chassi || "---"}</p>
                    <Status status={_?.status} />
                    <S.WrapperActions>
                      <IconEye
                        data-color-starcheck={
                          process.env.REACT_APP_PROJECT === "starcheck"
                        }
                        data-color-log={process.env.REACT_APP_PROJECT === "log"}
                        data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                        data-color-tokyo={
                          process.env.REACT_APP_PROJECT === "tokyo"
                        }
                        onClick={() =>
                          window.open(
                            `/meus-agendamentos/agendamento?id=${_.uuid}`,
                            "_blank"
                          )
                        }
                        src="/assets/svgs/eye.svg"
                        alt="olho"
                      />
                      <ButtonDots
                        statusAgendamento={_?.status}
                        handleWait={() => handleWait({ uuid: _.uuid })}
                        handleStart={() =>
                          setModalStart({
                            open: true,
                            uuid: _?.uuid,
                          })
                        }
                      />
                    </S.WrapperActions>
                  </S.BodyItem>
                )
              )}
            </S.Body>
          </S.GridBody>
        </S.Wrapper>
      ))}

      {agendamentosEmEspera?.length > 0 && (
        <S.Wrapper>
          <S.GridHeaderEmEspera>
            <div></div>
            <div>
              <p>Em Espera</p>
            </div>
          </S.GridHeaderEmEspera>
          <S.GridBody>
            <div className="gridItemFake"></div>
            <S.Body>
              <S.HeaderBody>
                <h4>Cliente</h4>
                <h4>Veículo</h4>
                <h4>Placa</h4>
                <h4>Chassi</h4>
                <h4>Status</h4>
                <span></span>
              </S.HeaderBody>
              {agendamentosEmEspera?.map((_) =>
                isMobile ? (
                  <S.BodyItem key={Math.random()}>
                    <div className="wrapperMobile">
                      <p>
                        {_?.veiculo?.placa || "---"} /{" "}
                        {_?.veiculo?.chassi || "---"}
                      </p>{" "}
                      <Status status={_?.status} />
                    </div>
                    <S.WrapperActions>
                      <IconEye
                        data-color-starcheck={
                          process.env.REACT_APP_PROJECT === "starcheck"
                        }
                        data-color-log={process.env.REACT_APP_PROJECT === "log"}
                        data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                        data-color-tokyo={
                          process.env.REACT_APP_PROJECT === "tokyo"
                        }
                        onClick={() =>
                          window.open(
                            `/meus-agendamentos/agendamento?id=${_.uuid}`,
                            "_blank"
                          )
                        }
                        src="/assets/svgs/eye.svg"
                        alt="olho"
                      />
                      <ButtonDots
                        statusAgendamento={_?.status}
                        handleStart={() =>
                          setModalStart({
                            open: true,
                            uuid: _?.uuid,
                          })
                        }
                      />
                    </S.WrapperActions>
                  </S.BodyItem>
                ) : (
                  <S.BodyItem key={Math.random()}>
                    <p>{_?.cliente?.nome || "---"}</p>
                    <p>{_?.veiculo?.modelo || "---"}</p>
                    <p>{_?.veiculo?.placa || "---"}</p>
                    <p>{_?.veiculo?.chassi || "---"}</p>
                    <Status status={_?.status} />
                    <S.WrapperActions>
                      <IconEye
                        data-color-starcheck={
                          process.env.REACT_APP_PROJECT === "starcheck"
                        }
                        data-color-log={process.env.REACT_APP_PROJECT === "log"}
                        data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                        data-color-tokyo={
                          process.env.REACT_APP_PROJECT === "tokyo"
                        }
                        onClick={() =>
                          window.open(
                            `/meus-agendamentos/agendamento?id=${_.uuid}`,
                            "_blank"
                          )
                        }
                        src="/assets/svgs/eye.svg"
                        alt="olho"
                      />
                      <ButtonDots
                        statusAgendamento={_?.status}
                        handleStart={() =>
                          setModalStart({
                            open: true,
                            uuid: _?.uuid,
                          })
                        }
                      />
                    </S.WrapperActions>
                  </S.BodyItem>
                )
              )}
            </S.Body>
          </S.GridBody>
        </S.Wrapper>
      )}

      {!(agendamentos?.length > 0) && !(agendamentosEmEspera.length > 0) && (
        <S.TextNotFound>
          Nenhum registro encontrado para a data de hoje.
        </S.TextNotFound>
      )}

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
            <p>{`Escolha `}<b>{`a baia de atendimento e o vistoriador `}</b>{`a qual será atribuída a vistoria.`}</p>
            <div>
              <SimpleSelect
                options={baitasOptions}
                label="Baia de Atendimento"
                value={baitasOptions?.find(
                  (item) => item?.value === modalStart?.uuidBaia
                )}
                onChange={(e: ISelectOptions) =>
                  setModalStart((prev) => ({ ...prev, uuidBaia: e?.value }))
                }
                required
              />
            </div>
            <div>
              <SimpleSelect
                options={vistoriadoresOptions}
                required
                label="Vistoriador"
                value={vistoriadoresOptions?.find(
                  (item) => item?.value === modalStart?.uuidVistoriador
                )}
                onChange={(e: ISelectOptions) =>
                  setModalStart((prev) => ({
                    ...prev,
                    uuidVistoriador: e?.value,
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
    </S.Container>
  );
};
