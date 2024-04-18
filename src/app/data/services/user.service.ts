import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { ApiCacheService } from 'src/app/core/services/api-cache.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { selectMaxPage } from 'src/app/states/page/page.selector';
import { setMaxPage } from 'src/app/states/page/page.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  maxPage$: Observable<number>;

  constructor(private http: HttpClient, private apiCacheService: ApiCacheService, private store: Store<AppState>) {
    this.maxPage$ = this.store.select(selectMaxPage);
  }

  getAllUsers(page: number): Observable<User[]> {
    const url = `${environment.apiUserEndpoint}?page=${page}`;
    return this.apiCacheService.get<User[]>(url).pipe(
      switchMap(cachedData => {
        if (cachedData) {
          return of(cachedData);
        } else {
          return this.http.get<{ total_pages: number, data: User[] }>(url).pipe(
            switchMap(response => {
              this.store.dispatch(setMaxPage(response.total_pages))
              this.apiCacheService.set(url, response.data);
              return of(response.data);
            })
          );
        }
      })
    );
  }

  getUserById(userId: string): Observable<User> {
    const url = `${environment.apiUserEndpoint}/${userId}`;
    return this.apiCacheService.get<User>(url).pipe(
      switchMap(cachedData => {
        if (cachedData) {
          return of(cachedData);
        } else {
          return this.http.get<{ data: User }>(url).pipe(
            map(response => response.data),
            switchMap(data => {
              this.apiCacheService.set(url, data);
              return of(data);
            })
          );
        }
      })
    );
  }
}
