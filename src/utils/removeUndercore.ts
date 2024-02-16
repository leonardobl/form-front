export function removeUndercore(v: string) {
  if (!v) return "";
  return v.replaceAll("_", " ");
}
