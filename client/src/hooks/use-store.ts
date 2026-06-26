import { useState, useEffect } from "react";

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>(() => result);

  useEffect(() => {
    const unsubscribe = store((state: T) => {
      setData(callback(state));
    });
    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, [store, callback]);

  return data;
};
