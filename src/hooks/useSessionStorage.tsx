import { useCallback, useState } from "react";

export function useSessionStorage(key: string, initalValue = "") {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);

      return storageValue ? JSON.parse(storageValue) : initalValue;
    } catch {
      return initalValue;
    }
  });

  const setValue = useCallback(
    (value: string) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [state, setValue];
}
