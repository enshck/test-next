import types from "./types";
// ------------------------------------
// Actions
// ------------------------------------

export const setChangedLanguage = (language: string) => ({
  type: types.SET_CHANGED_LANGUAGE,
  payload: language,
});

export const actions = {
  setChangedLanguage,
};
