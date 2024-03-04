import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { v4 } from "uuid";
import { components } from "react-select";
import { MyModal } from "../../Atoms/MyModal";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { SwitchOptions } from "../../Atoms/SwitchOptions";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { useNewScheduling } from "./useNewScheduling";
import { maskCep, removerCaracteresEspeciais } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";

export const NewSchedulingTemplate = () => {
  const {
    formNewClient,
    handleCep,
    handleCpf,
    handlePhone,
    handleSubmitNewClient,
    setFormNewClient,
    cliente,
    getValues,
    modalIsOpen,
    setModalIsOpen,
    setTipoAtendimento,
    setTipoPagamento,
    setTipoServico,
    tipoAtendimento,
    tipoPagamento,
    tipoServico,
    isLoading,
    formAgendamento,
    setFormAgendamento,
    cidadesOptions,
    dateAgendamento,
    horariosOptions,
    setDateAgendamento,
    diasIndisponiveis,
    ufOptions,
    handleSubmitAgendamento,
    formService,
    setFormSerice,
    formVihacle,
    handleClient,
    setSwapClient,
    selectOptions,
    resetCliente,
    tipoClienteOptions,
    disabled,
    formAddress,
    saveAgendamento,
    setFormAddress,
  } = useNewScheduling();

  // const { Option } = components;
  // const IconOption = (props) => (
  //   <Option {...props}>
  //     <S.WrapperValue>
  //       {props.data.label}
  //       <img src={"/assets/svgs/plus-round.svg"} alt={"icone adicionar"} />
  //     </S.WrapperValue>
  //   </Option>
  // );

  return (
    <LayoutTemplate>
      <MyModal
        onRequestClose={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
      >
        <S.FormModal onSubmit={handleSubmitNewClient}>
          <S.GridModal>
            <div>
              <Input
                variant="modal"
                label="Nome"
                required
                value={formNewClient?.nome}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    nome: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="CPF/CNPJ"
                required
                maxLength={18}
                value={formNewClient?.cpfCnpj}
                onChange={(e) => handleCpf(e.target.value)}
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="E-mail"
                type="email"
                value={formNewClient?.email}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="Telefone"
                value={formNewClient?.telefone}
                maxLength={15}
                onChange={(e) =>
                  handlePhone({ e: e.target.value, setForms: setFormNewClient })
                }
              />
            </div>
            <div>
              <SimpleSelect
                variant="modal"
                label="Tipo"
                required
                options={tipoClienteOptions}
              />
            </div>
            <div>
              <Input
                variant="modal"
                required
                label="Cep"
                maxLength={9}
                onBlur={() => handleCep(formNewClient, setFormNewClient)}
                value={formNewClient?.endereco?.cep}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      cep: maskCep(e.target.value),
                    },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Endereço (Rua)"
                required
                value={formNewClient?.endereco?.logradouro}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      logradouro: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="Numero"
                type="number"
                required
                value={formNewClient?.endereco?.numero}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      numero: e.target.value,
                    },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Bairro"
                required
                value={formNewClient?.endereco?.bairro}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: { ...prev.endereco, bairro: e.target.value },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Complemento"
                value={formNewClient?.endereco?.complemento}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      complemento: e.target.value,
                    },
                  }))
                }
              />
            </div>

            <div>
              <SimpleSelect
                variant="modal"
                label="UF"
                required
                key={`${Math.random()}`}
                value={ufOptions.find(
                  (_) => _.value === formNewClient?.endereco?.uf
                )}
                options={ufOptions}
                onChange={(e: ISelectOptions) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: { ...prev.endereco, uf: e.value },
                  }))
                }
              />
            </div>
            <div>
              <SimpleSelect
                variant="modal"
                label="Cidade"
                required
                key={`${Math.random()}`}
                value={cidadesOptions.find(
                  (_) => _.value === formNewClient?.endereco?.cidade
                )}
                options={cidadesOptions}
                onChange={(e: ISelectOptions) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      cidade: e?.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <Button>Salvar</Button>
            </div>
          </S.GridModal>
        </S.FormModal>
      </MyModal>
      <S.Container>
        <Title>Novo agendamento</Title>
        <S.FormSearch onSubmit={handleClient}>
          <div>
            <AsyncSimpleSelect
              variant="search"
              placeholder=""
              isClearable
              required
              noOptionsMessage={() => (
                <S.NotFoundvalue>
                  Não encontrado
                  <img
                    src={"/assets/svgs/plus-round.svg"}
                    alt={"icone de adicionar"}
                    onClick={() => setModalIsOpen(true)}
                  />
                </S.NotFoundvalue>
              )}
              onChange={(e) => {
                if (e?.element) {
                  setSwapClient(e?.element);
                  return;
                }
                resetCliente();
              }}
              loadOptions={getValues}
            />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.FormSearch>

        {cliente?.nome && (
          <>
            <S.FormUser>
              <S.GridUser>
                <div>
                  <Input label="Nome" readOnly value={cliente?.nome} />
                </div>

                <div>
                  <Input label="CPF/CNPJ" readOnly value={cliente?.cpfCnpj} />
                </div>

                <div>
                  <Input label="Telefone" readOnly value={cliente?.telefone} />
                </div>

                <div>
                  <Input label="E-mail" readOnly value={cliente?.email} />
                </div>

                <div>
                  <Input label="Tipo" readOnly value={cliente?.tipo} />
                </div>
              </S.GridUser>
            </S.FormUser>
            <SwitchOptions
              optionA={{
                label: "Loja Física",
                value: TipoAtendimentoEnum.LOJA,
              }}
              optionB={{
                label: "Domicílio",
                value: TipoAtendimentoEnum.DOMICILIO,
              }}
              className="optionAtendance"
              handleOnChange={(v) => setTipoAtendimento(TipoAtendimentoEnum[v])}
            />
            <Title>
              {tipoAtendimento === TipoAtendimentoEnum.LOJA
                ? "Loja Física"
                : "Domicílio"}
            </Title>
            <S.FormAtendence onSubmit={handleSubmitAgendamento}>
              <S.GridAtendece>
                <div>
                  <SimpleSelect
                    required
                    key={`${tipoAtendimento}`}
                    options={selectOptions}
                    onChange={(e: ISelectOptions) => {
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? setFormAgendamento((prev) => ({
                            ...prev,
                            uuidLoja: e?.value,
                          }))
                        : setFormAgendamento((prev) => ({
                            ...prev,
                            uuidDelivery: e?.value,
                          }));
                    }}
                    value={
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? selectOptions.find(
                            (item) => item.value === formAgendamento?.uuidLoja
                          )
                        : selectOptions.find(
                            (item) =>
                              item.value === formAgendamento?.uuidDelivery
                          )
                    }
                    label={
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? "Loja"
                        : "Cidade"
                    }
                  />
                </div>

                <div>
                  <Text>
                    Datas e horários{" "}
                    <span className="textStrong">disponíveis</span>.
                  </Text>
                </div>

                <div>
                  <InputDate
                    required
                    label="Data"
                    showIcon
                    key={`${tipoAtendimento}`}
                    isLoading={isLoading}
                    minDate={new Date()}
                    disabled={
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? !!!formAgendamento?.uuidLoja
                        : !!!formAgendamento?.uuidDelivery
                    }
                    excludeDates={diasIndisponiveis}
                    onChange={(e) => {
                      setDateAgendamento(e);
                    }}
                    placeholderText="__/__/__"
                    selected={dateAgendamento}
                  />
                </div>

                <div>
                  <SimpleSelect
                    label="Horário"
                    required
                    key={`${tipoAtendimento}`}
                    isDisabled={!dateAgendamento}
                    value={
                      horariosOptions?.find(
                        (item) => item.value === formAgendamento.horaAgendada
                      ) || null
                    }
                    onChange={(e: ISelectOptions) =>
                      setFormAgendamento((prev) => ({
                        ...prev,
                        horaAgendada: e?.value,
                      }))
                    }
                    options={horariosOptions}
                  />
                </div>
              </S.GridAtendece>

              {tipoAtendimento === TipoAtendimentoEnum.DOMICILIO && (
                <S.WrapperAddress>
                  <Title>Endereço de Atendimento</Title>
                  <S.GridAddress>
                    <div>
                      <Input
                        label="Nome"
                        required
                        value={formAddress?.nome}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            nome: e?.target?.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Input
                        label="Telefone"
                        required
                        maxLength={15}
                        onChange={(e) =>
                          handlePhone({
                            e: e.target.value,
                            setForms: setFormAddress,
                          })
                        }
                        value={formAddress?.telefone}
                      />
                    </div>
                    <div>
                      <Input
                        label="CEP"
                        required
                        onBlur={() => handleCep(formAddress, setFormAddress)}
                        value={formAddress?.endereco?.cep}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              cep: maskCep(e.target.value),
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Input
                        label="Endereço (Rua)"
                        required
                        value={formAddress?.endereco?.logradouro}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              logradouro: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Input
                        label="Número"
                        required
                        value={formAddress?.endereco?.numero}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              numero: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Input
                        label="Complemento"
                        value={formAddress?.endereco?.complemento}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              complemento: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Input
                        label="Bairro"
                        required
                        value={formAddress?.endereco?.bairro}
                        onChange={(e) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              bairro: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <SimpleSelect
                        label="UF"
                        required
                        placeholder=""
                        options={ufOptions}
                        value={ufOptions.find(
                          (item) => item.value === formAddress?.endereco?.uf
                        )}
                        onChange={(e: ISelectOptions) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: { ...prev.endereco, uf: e.value },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <SimpleSelect
                        label="Cidade"
                        required
                        key={`${Math.random()}-${formAddress?.endereco?.uf}`}
                        placeholder=""
                        value={cidadesOptions.find(
                          (item) => item.value === formAddress?.endereco?.cidade
                        )}
                        options={cidadesOptions}
                        onChange={(e: ISelectOptions) =>
                          setFormAddress((prev) => ({
                            ...prev,
                            endereco: {
                              ...prev.endereco,
                              cidade: e.value,
                            },
                          }))
                        }
                      />
                    </div>
                  </S.GridAddress>
                </S.WrapperAddress>
              )}

              <Text className="textService">
                Escolha qual <span className="textStrong">serviço</span> você
                deseja realizar.
              </Text>

              <SwitchOptions
                optionA={{
                  label: "1° Emplacamento",
                  value: OpcoesServicosEnum.EMPLACAMENTO,
                }}
                optionB={{
                  label: "Vistoria",
                  value: OpcoesServicosEnum.VISTORIA,
                }}
                className="optionAtendance"
                handleOnChange={(v) => setTipoServico(OpcoesServicosEnum[v])}
              />

              {tipoServico === OpcoesServicosEnum.EMPLACAMENTO ? (
                <S.GridLicense>
                  <div>
                    <Input
                      label="Chassi"
                      required
                      value={formService.Chassi}
                      onChange={(e) =>
                        setFormSerice((prev) => ({
                          ...prev,
                          Chassi: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Button>Buscar</Button>
                  </div>
                </S.GridLicense>
              ) : (
                <S.GridSurvey>
                  <div>
                    <Input
                      label="Placa"
                      required
                      value={formService.Placa}
                      onChange={(e) => {
                        setFormSerice((prev) => ({
                          ...prev,
                          Placa: removerCaracteresEspeciais(e.target.value),
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="Renavam"
                      required
                      type="number"
                      value={formService.Renavam}
                      onChange={(e) =>
                        setFormSerice((prev) => ({
                          ...prev,
                          Renavam: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Button>Buscar</Button>
                  </div>
                </S.GridSurvey>
              )}
            </S.FormAtendence>

            <Title>Informações do Veículo</Title>

            <S.FormVeihecle>
              <S.GridVeihecle>
                <div>
                  <Input
                    label="Modelo do carro"
                    readOnly
                    value={formVihacle?.modelo}
                  />
                </div>
                <div>
                  <Input label="Ano" readOnly value={formVihacle?.ano} />
                </div>
                <div>
                  <Input label="Placa" readOnly value={formVihacle?.placa} />
                </div>
                <div>
                  <Input
                    label="Renavam"
                    readOnly
                    value={formVihacle?.renavam}
                  />
                </div>
                <div>
                  <Input
                    label="Tipo de Veículo"
                    readOnly
                    value={formVihacle?.tipo}
                  />
                </div>
                <div>
                  <Input label="Chassi" readOnly value={formVihacle?.chassi} />
                </div>
              </S.GridVeihecle>
            </S.FormVeihecle>

            <SwitchOptions
              IconA="/assets/svgs/pix1.svg"
              IconB="/assets/svgs/codigoBarras1.svg"
              optionA={{
                label: "Pix",
                value: FormaPagamentoEnum.PIX,
              }}
              optionB={{
                label: "Boleto",
                value: FormaPagamentoEnum.BOLETO,
              }}
              className="paymentSwitch"
              handleOnChange={(v) => setTipoPagamento(FormaPagamentoEnum[v])}
            />

            <Button
              className="finalButton"
              disabled={disabled}
              onClick={saveAgendamento}
            >
              Salvar
            </Button>
          </>
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
