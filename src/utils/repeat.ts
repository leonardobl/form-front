export function repeatString(qtd: number, str: string) {
  const newString = str + " ";

  return newString.repeat(qtd).trim();
}
