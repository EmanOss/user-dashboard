import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { nextPage, previousPage, setPage } from 'src/app/states/page/page.actions';
import { selectPage } from 'src/app/states/page/page.selector';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pages: number[] = [1, 2, 3, 4];
  page$: Observable<number>;
  currentPage!: number;


  constructor(private store: Store<AppState>) {
    this.page$ = this.store.select(selectPage);
    this.page$.subscribe(page => {
      this.currentPage = page;
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
