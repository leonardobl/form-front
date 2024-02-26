export function cleanStorage() {
  sessionStorage.removeItem("agendamento");
  sessionStorage.removeItem("reagendamento");
  sessionStorage.removeItem("@token");
  sessionStorage.removeItem("agendamentoSession");
}
