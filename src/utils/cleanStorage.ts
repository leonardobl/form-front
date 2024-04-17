export function cleanStorage() {
  localStorage.removeItem("agendamento");
  localStorage.removeItem("reagendamento");
  localStorage.removeItem("@token");
  localStorage.removeItem("agendamentoSession");
}
