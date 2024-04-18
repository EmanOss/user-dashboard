import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressVisible = new BehaviorSubject<boolean>(false);
  progressVisible$ = this.progressVisible.asObservable();

  constructor() { }

  show() {
    this.progressVisible.next(true);
  }

  hide() {
    this.progressVisible.next(false);
  }
}
