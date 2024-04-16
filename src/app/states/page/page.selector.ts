import { createSelector } from "@ngrx/store";
import { PageState } from "./page.reducer";
import { AppState } from "../app.state";

export const selectPageState = (state: AppState) => state.page;

export const selectPage = createSelector(
  selectPageState,
  (state) => state.page
);
