export function reverseToIsoDate(date: string) {
  if (!date) return;

  const newDate = date.split("/").reverse().join("-");

  return newDate;
}

export function reverseToBrDate(date: string) {
  if (!date) return;

  const newDate = date.split("-").reverse().join("/");

  return newDate;
}
