export function removeUnderscore(text: string) {
  if (!text) return "";
  return text.replaceAll("_", " ");
}
