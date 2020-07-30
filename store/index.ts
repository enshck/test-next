import { useMemo } from "react";
import { createStore } from "redux";

import { reducers } from "./reducers";

let store: any;

function initStore() {
  return createStore(reducers);
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore();

  if (preloadedState && store) {
    _store = initStore();
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
