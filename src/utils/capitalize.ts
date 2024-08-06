export function Capitalize(txt: string) {
  if (!txt) return "";

  const txtCapitalize = txt
    .split(" ")
    .map((t) => `${t.charAt(0).toUpperCase()}${t.slice(1).toLowerCase()}`)
    .join(" ");

  return txtCapitalize;
}
