import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { nextPage, previousPage, setPage } from 'src/app/states/page/page.actions';
import { selectMaxPage, selectPage } from 'src/app/states/page/page.selector';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  page$: Observable<number>;
  maxPage$: Observable<number>;
  currentPage!: number;
  pages: number[] = [];


  constructor(private store: Store<AppState>) {
    this.page$ = this.store.select(selectPage);
    this.maxPage$ = this.store.select(selectMaxPage);
    this.page$.subscribe(page => {
      this.currentPage = page;
    });
    this.maxPage$.subscribe(maxPage => {
      this.pages = Array.from({ length: maxPage }, (_, i) => i + 1);
    });
  }

  nextPage() {
    this.store.dispatch(nextPage());
  }
  previousPage() {
    this.store.dispatch(previousPage());
  }
  setPage(page: number) {
    this.store.dispatch(setPage(page));
  }
}
