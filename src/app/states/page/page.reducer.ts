import { createReducer, on } from "@ngrx/store";
import { nextPage, previousPage, setPage } from "./page.actions";

export interface PageState {
  page: number;
}
export const initialPageState: PageState = {
  page: 1
};
export const pageReducer = createReducer(
  initialPageState,
  on(nextPage, state => ({ ...state, page: state.page + 1 })),
  on(previousPage, state => ({ ...state, page: state.page - 1 })),
  on(setPage, (state, { page }) => ({ ...state, page: page }))
);