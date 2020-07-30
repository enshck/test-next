import types from "./types";
import { combineReducers } from "redux";

const changedLanguageReducers = (state = "", action: any) => {
  switch (action.type) {
    case types.SET_CHANGED_LANGUAGE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  changedLanguage: changedLanguageReducers,
});
