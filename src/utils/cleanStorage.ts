export function cleanStorage() {
  sessionStorage.removeItem("reagendamento");
  sessionStorage.removeItem("agendamento");
  sessionStorage.removeItem("detalheAgendamento");
  sessionStorage.removeItem("servico");
  sessionStorage.removeItem("usuario");
  sessionStorage.removeItem("cliente");
  sessionStorage.removeItem("veiculo");
  sessionStorage.removeItem("tipoAtendimento");
  sessionStorage.removeItem("buttonLogin");
}
