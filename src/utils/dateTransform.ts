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

export function reverseToDateObject(date: string) {
  if (!date) return;
  
  const parts = date.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}
