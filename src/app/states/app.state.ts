import { PageState } from "./page/page.reducer";
import { QueryState } from "./query/query.reducer";

export interface AppState {
  page: PageState;
  query: QueryState;
}