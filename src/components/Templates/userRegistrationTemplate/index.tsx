import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title/styles";
import { MenuItem, Select, TextField } from "@mui/material";
import { Button } from "../../Atoms/Button";
import { useUserRegistration } from "./useUserRegistration";

export const UserRegistrationTemplate = () => {
  const {
    form,
    setForm,
    handleCpf,
    handlePhone,
    handleCep,
    cidadesOptions,
    ufOptions,
    cepLoad,
    checkPass,
    handleSubmit,
    inpConfirSenha,
    inpSenhaRef,
  } = useUserRegistration();

  return (
    <LayoutTemplate>
      <S.Container>
        <Title>CADASTRO</Title>
        <S.Form>
          <div>
            <TextField
              fullWidth
              variant="standard"
              label="Nome Completo"
              required
              value={form?.nome}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="E-mail"
              type="email"
              value={form?.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="Telefone"
              value={form?.telefone}
              inputProps={{ maxLength: "15" }}
              onChange={(e) => handlePhone(e.target.value)}
            />
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="CPF/CNPJ"
              required
              value={form?.cpfCnpj}
              onChange={(e) => handleCpf(e.target.value)}
              inputProps={{ maxLength: "18" }}
            />
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="CEP"
              required
              inputProps={{ maxLength: "9" }}
              value={form?.endereco?.cep}
              onChange={(e) => handleCep(e.target.value)}
            />
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="Endereço (Rua)"
              key={`${Math.random()} - ${cepLoad}`}
              required
              value={form?.endereco?.logradouro}
              onChange={(e) =>
                setForm((prev) => ({
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
            <TextField
              fullWidth
              variant="standard"
              label="Número"
              required
              type="number"
              value={form?.endereco?.numero}
              onChange={(e) =>
                setForm((prev) => ({
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
            <TextField
              fullWidth
              variant="standard"
              label="Complemento"
              value={form?.endereco?.complemento}
              onChange={(e) =>
                setForm((prev) => ({
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
            <TextField
              fullWidth
              variant="standard"
              label="Bairro"
              required
              key={`${Math.random()} - ${cepLoad}`}
              value={form?.endereco?.bairro}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: { ...prev.endereco, bairro: e.target.value },
                }))
              }
            />
          </div>

          <div>
            <Select
              fullWidth
              variant="standard"
              label="UF"
              key={`${Math.random()} - ${cepLoad}`}
              required
              value={form?.endereco?.uf}
              defaultValue={form?.endereco?.uf}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: { ...prev.endereco, uf: e.target.value },
                }))
              }
            >
              {ufOptions.map((item) => (
                <MenuItem key={`${Math.random()}`} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              key={`${Math.random()}-${form?.endereco?.uf}`}
              fullWidth
              variant="standard"
              label="Cidade"
              required
              value={form?.endereco?.cidade}
              defaultValue={form?.endereco?.cidade}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  endereco: {
                    ...prev.endereco,
                    cidade: e?.target.value,
                  },
                }))
              }
            >
              {cidadesOptions.map((item) => (
                <MenuItem key={`${Math.random()}`} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <TextField
              fullWidth
              variant="standard"
              label="Senha"
              required
              type="password"
              value={form?.senha}
              ref={inpSenhaRef}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, senha: e.target.value }));
                checkPass && checkPass();
              }}
            />
          </div>

          <div>
            <TextField
              fullWidth
              type="password"
              variant="standard"
              label="Confirmar Senha"
              required
              ref={inpConfirSenha}
              onChange={(e) => checkPass && checkPass()}
            />
          </div>

          <div>
            <Button>Cadastrar</Button>
          </div>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
