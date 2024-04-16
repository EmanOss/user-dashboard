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
  @Input() pages: number[] = [1, 2, 3, 4]
  @ViewChild('nextButton') nextButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('previousButton') previousButton!: ElementRef;
  page$: Observable<number>;


  constructor(private store: Store<AppState>) {
    this.page$ = this.store.select(selectPage);
  }
  ngAfterViewInit() {
    this.handlePageLimits();
  }
  handlePageLimits() {
    this.page$.subscribe(page => {
      if (page === this.pages[this.pages.length - 1]) {
        this.nextButton.nativeElement.classList.add('disabled');
      }
      else {
        this.nextButton.nativeElement.classList.remove('disabled');
      }
      if (page === this.pages[0]) {
        this.previousButton.nativeElement.classList.add('disabled');
      }
      else {
        this.previousButton.nativeElement.classList.remove('disabled');
      }
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
