import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useEditProfile } from "./useEditProfile";
import { ISelectOptions } from "../../../types/inputs";
import { maskCep } from "../../../utils/masks";

export const EditProfileTemplate = () => {
  const {
    checkPass,
    cidadesOptions,
    formUsuario,
    handleCep,
    handleCpf,
    handlePhone,
    inpConfirSenha,
    inpSenhaRef,
    setFormUsuario,
    formCliente,
    setFormCliente,
    ufOptions,
    isAdmGerente,
    isCliente,
  } = useEditProfile();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Meu perfil</Title>
        {isCliente ? (
          <S.FormClient>
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
                  onChange={(e) => handleCpf(e.target.value)}
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
                  onChange={(e) => handlePhone(e.target.value)}
                />
              </div>
              <div>
                <Input
                  required
                  maxLength={9}
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
                <Input
                  type="password"
                  label="Senha"
                  required
                  value={formCliente.senha}
                  ref={inpSenhaRef}
                  onChange={(e) => {
                    setFormCliente((prev) => ({
                      ...prev,
                      senha: e.target.value,
                    }));
                    checkPass();
                  }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  label="Confirmar Senha"
                  required
                  ref={inpConfirSenha}
                  onChange={(e) => checkPass()}
                />
              </div>
              <div>
                <Button>Salvar</Button>
              </div>
            </S.GridClient>
          </S.FormClient>
        ) : (
          <S.FormAdmin>
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
                  onChange={(e) => handleCpf(e.target.value)}
                />
              </div>

              <div>
                <Input
                  label="Telefone"
                  variant="edit"
                  value={formUsuario?.telefone}
                  maxLength={15}
                  onChange={(e) => handlePhone(e.target.value)}
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
