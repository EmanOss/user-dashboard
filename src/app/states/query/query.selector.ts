import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectQueryState = (state: AppState) => state.query;

export const selectQuery = createSelector(
  selectQueryState,
  (state) => state.query
);
