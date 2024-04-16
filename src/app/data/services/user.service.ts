import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getAllUsers(page: number): Observable<User[]> {
    console.log('getting all users');
    const url = `${environment.apiUserEndpoint}?page=${page}`;
    return this.http.get<{ data: User[] }>(url).pipe(
      map(response => response.data)
    );
  }
  getUserById(userId: string): Observable<User> {
    console.log('userId', userId);
    const url = `${environment.apiUserEndpoint}/${userId}`;
    return this.http.get<{ data: User }>(url).pipe(
      map(response => response.data)
    );
  }
}
