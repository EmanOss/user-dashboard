import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/data/interfaces/user';
import { AppState } from 'src/app/states/app.state';
import { Store } from '@ngrx/store';
import { selectPage } from 'src/app/states/page/page.selector';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  page$: Observable<number>;
  users$!: Observable<User[]>;

  constructor(private store: Store<AppState>, private userService: UserService) {
    this.page$ = this.store.select(selectPage);
  }

  fetchAllUsers() {
    this.users$ = this.page$.pipe(
      switchMap(page => {
        return this.userService.getAllUsers(page);
      })
    );
  }
}
