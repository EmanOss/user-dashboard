import { createReducer, on } from "@ngrx/store";
import { nextPage, previousPage, setMaxPage, setPage } from "./page.actions";

export interface PageState {
  page: number;
  maxPage: number;
}
export const initialPageState: PageState = {
  page: 1,
  maxPage: 1
};
export const pageReducer = createReducer(
  initialPageState,
  on(nextPage, state => ({ ...state, page: state.page + 1 })),
  on(previousPage, state => ({ ...state, page: state.page - 1 })),
  on(setPage, (state, { page }) => ({ ...state, page: page })),
  on(setMaxPage, (state, { maxPage }) => ({ ...state, maxPage: maxPage }))
);