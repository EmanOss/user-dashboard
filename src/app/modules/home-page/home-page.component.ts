import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { User } from 'src/app/data/interfaces/user';
import { AppState } from 'src/app/states/app.state';
import { Store } from '@ngrx/store';
import { selectPage } from 'src/app/states/page/page.selector';
import { UserService } from 'src/app/data/services/user.service';
import { selectQuery } from 'src/app/states/query/query.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  page$: Observable<number>;
  query$: Observable<string>;
  users$!: Observable<User[]>;
  noSearchResult = false;

  constructor(private store: Store<AppState>, private userService: UserService) {
    this.page$ = this.store.select(selectPage);
    this.query$ = this.store.select(selectQuery);
    this.query$.subscribe(query => {
      this.search(query);
    });
  }

  fetchAllUsers() {
    this.users$ = this.page$.pipe(
      switchMap(page => {
        return this.userService.getAllUsers(page);
      })
    );
  }

  search(query: string) {
    if (!query) {
      this.fetchAllUsers();
    }
    else {
      this.users$ = this.userService.getUserById(query).pipe(map(user => [user]),
    );
    }
  }
}
