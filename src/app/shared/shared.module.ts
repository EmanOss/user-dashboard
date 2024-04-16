import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ProgressBarComponent,
    UsersListComponent,
    UserCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ProgressBarComponent,
    UsersListComponent,
    UserCardComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
