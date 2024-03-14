import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useProfile } from "./useProfile";
import { ISelectOptions } from "../../../types/inputs";
import { maskCep } from "../../../utils/masks";

export const ProfileTemplate = () => {
  const {
    cidadesOptions,
    formUsuario,
    handleCep,
    maskPhone,
    maskCnpj,
    maskCpf,
    handleSubmitCliente,
    handleSubmitUsuario,
    setFormUsuario,
    formCliente,
    setFormCliente,
    ufOptions,
    isCliente,
  } = useProfile();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Meu perfil</Title>
        {isCliente ? (
          <S.FormClient onSubmit={handleSubmitCliente}>
            <S.GridClient>
              <div>
                <Input
                  label="Nome"
                  required
                  variant="edit"
                  value={formCliente.nome}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
                      ...prev,
                      nome: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  label="CPF/CNPJ"
                  required
                  variant="edit"
                  value={formCliente.cpfCnpj}
                  maxLength={18}
                  onChange={(e) => {
                    if (e.target.value.length > 14) {
                      setFormCliente((prev) => ({
                        ...prev,
                        cpfCnpj: maskCnpj(e.target.value),
                      }));
                      return;
                    }

                    setFormCliente((prev) => ({
                      ...prev,
                      cpfCnpj: maskCpf(e.target.value),
                    }));
                  }}
                />
              </div>
              <div>
                <Input
                  label="E-mail"
                  variant="edit"
                  type="email"
                  value={formCliente.email}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  label="Telefone"
                  variant="edit"
                  value={formCliente.telefone}
                  maxLength={15}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
                      ...prev,
                      telefone: maskPhone(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  required
                  maxLength={9}
                  label="Cep"
                  onBlur={handleCep}
                  value={formCliente?.endereco?.cep}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
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
                  variant="edit"
                  value={formCliente?.endereco?.logradouro}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
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
                  variant="edit"
                  type="number"
                  value={formCliente?.endereco?.numero}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
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
                  label="Bairro"
                  required
                  variant="edit"
                  value={formCliente?.endereco?.bairro}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
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
                <Input
                  label="Complemento"
                  variant="edit"
                  value={formCliente?.endereco?.complemento}
                  onChange={(e) =>
                    setFormCliente((prev) => ({
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
                  label="UF"
                  placeholder=""
                  options={ufOptions}
                  value={ufOptions.find(
                    (item) => item.value === formCliente?.endereco?.uf
                  )}
                  onChange={(e: ISelectOptions) =>
                    setFormCliente((prev) => ({
                      ...prev,
                      endereco: { ...prev.endereco, uf: e.value },
                    }))
                  }
                />
              </div>
              <div>
                <SimpleSelect
                  label="Cidade"
                  key={`${Math.random()}-${formCliente?.endereco?.uf}`}
                  required
                  placeholder=""
                  value={cidadesOptions.find(
                    (item) => item.value === formCliente?.endereco?.cidade
                  )}
                  options={cidadesOptions}
                  onChange={(e: ISelectOptions) =>
                    setFormCliente((prev) => ({
                      ...prev,
                      endereco: {
                        ...prev.endereco,
                        cidade: e.value,
                      },
                    }))
                  }
                />
              </div>

              <div>
                <Button>Salvar</Button>
              </div>
            </S.GridClient>
          </S.FormClient>
        ) : (
          <S.FormAdmin onSubmit={handleSubmitUsuario}>
            <S.GridAdmin>
              <div>
                <Input
                  label="Nome"
                  required
                  variant="edit"
                  value={formUsuario?.nome}
                  onChange={(e) =>
                    setFormUsuario((prev) => ({
                      ...prev,
                      nome: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  label="CPF/CNPJ"
                  required
                  variant="edit"
                  value={formUsuario?.cpfCnpj}
                  maxLength={18}
                  onChange={(e) => {
                    if (e?.target?.value?.length > 14) {
                      setFormUsuario((prev) => ({
                        ...prev,
                        cpfCnpj: maskCnpj(e.target.value),
                      }));
                      return;
                    }
                    setFormUsuario((prev) => ({
                      ...prev,
                      cpfCnpj: maskCpf(e.target.value),
                    }));
                  }}
                />
              </div>

              <div>
                <Input
                  label="Telefone"
                  variant="edit"
                  type="tel"
                  value={formUsuario?.telefone}
                  maxLength={15}
                  onChange={(e) =>
                    setFormUsuario((prev) => ({
                      ...prev,
                      telefone: maskPhone(e.target.value),
                    }))
                  }
                />
              </div>

              <div>
                <Input
                  label="E-mail"
                  variant="edit"
                  type="email"
                  value={formUsuario.email}
                  onChange={(e) =>
                    setFormUsuario((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <Button>Salvar</Button>
              </div>
            </S.GridAdmin>
          </S.FormAdmin>
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
