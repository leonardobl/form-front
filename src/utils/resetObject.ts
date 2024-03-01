export function resetValues(object: any): any {
  if (!object) return;
  const data = Object.keys(object);

  const parsed = data.reduce((acc, cur) => {
    if (typeof object[cur] === "string") acc[cur] = "";
    else if (typeof object[cur] === "number") acc[cur] = 0;
    else if (typeof object[cur] === "boolean") acc[cur] = false;
    else if (Array.isArray(object[cur])) acc[cur] = [];
    else acc[cur] = "";

    return acc;
  }, {});

  return parsed;
}
