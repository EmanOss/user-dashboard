import { createReducer, on } from "@ngrx/store";
import { setQuery } from "./query.actions";

export interface QueryState {
  query: string;
}
export const initialQueryState: QueryState = {
  query: ''
};
export const queryReducer = createReducer(
  initialQueryState,
  on(setQuery, (state, { query }) => ({ ...state, query: query }))
);