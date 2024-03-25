export default function objectToParams(params: unknown): string {
  const result = params
    ? Object.entries(params)
        .map((e) =>
          Array.isArray(e[1]) ? e[1].map((z) => `${e[0]}=${z}`) : e.join("=")
        )
        .flat()
        .join("&")
    : "";

  return result;
}
