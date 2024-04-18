import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { pageReducer } from './states/page/page.reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { queryReducer } from './states/query/query.reducer';
import { ProgressInterceptor } from './core/interceptors/progress.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      page: pageReducer,
      query: queryReducer
    }, {}),
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
