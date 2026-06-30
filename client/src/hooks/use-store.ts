"use client";

import { useSyncExternalStore } from "react";

export function useStore<TState, TSelected>(
  store: {
    getState: () => TState;
    subscribe: (listener: () => void) => () => void;
  },
  selector: (state: TState) => TSelected,
): TSelected {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState()),
  );
}
