import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { setQuery } from 'src/app/states/query/query.actions';
import { selectQuery } from 'src/app/states/query/query.selector';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  searchControl = new FormControl();
  query$: Observable<string>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.query$ = this.store.select(selectQuery);
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(query => {
      this.store.dispatch(setQuery(query))
      this.router.navigate(['/home']);
    });
  }
}
