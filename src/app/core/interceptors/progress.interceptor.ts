import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { ProgressService } from '../services/progress.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  constructor(private progressService: ProgressService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressService.show();

    return next.handle(req).pipe(
      finalize(
        () => {
          this.progressService.hide();
        }
      )
    );
  }

}
