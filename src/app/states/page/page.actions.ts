import { createAction } from "@ngrx/store";

export const nextPage = createAction('[Pagination Component] Next Page');
export const previousPage = createAction('[Pagination Component] Previous Page');
export const setPage = createAction('[Pagination Component] Set Page', (page: number) => ({ page }));