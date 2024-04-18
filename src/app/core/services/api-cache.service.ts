import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCacheService {

  private cache: { [key: string]: { data: any, timestamp: number } } = {};
  private cacheExpirationMilliseconds = 300000; // Cache expiration time set to 5 minutes

  constructor() { }

  set<T>(key: string, data: T): void {
    this.cache[key] = { data, timestamp: Date.now() };
  }

  get<T>(key: string): Observable<T | null> {
    const cachedData = this.cache[key];
    if (cachedData && Date.now() - cachedData.timestamp < this.cacheExpirationMilliseconds) {
      return of(cachedData.data);
    } else {
      delete this.cache[key];
      return of(null);
    }
  }

  clear(): void {
    this.cache = {};
  }

}
