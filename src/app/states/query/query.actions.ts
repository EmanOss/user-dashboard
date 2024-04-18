import { createAction } from "@ngrx/store";

export const setQuery = createAction('[Search Input Component] Set Query', (query: string) => ({ query }));