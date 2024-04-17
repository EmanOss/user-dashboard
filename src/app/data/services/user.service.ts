import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { ApiCacheService } from 'src/app/core/services/api-cache.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient, private apiCacheService: ApiCacheService) { }

  getAllUsers(page: number): Observable<User[]> {
    // console.log('getting all users');
    const url = `${environment.apiUserEndpoint}?page=${page}`;
    return this.apiCacheService.get<User[]>(url).pipe(
      switchMap(cachedData => {
        if (cachedData) {
          return of(cachedData);
        } else {
          return this.http.get<{ data: User[] }>(url).pipe(
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

  getUserById(userId: string): Observable<User> {
    // console.log('userId', userId);
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
