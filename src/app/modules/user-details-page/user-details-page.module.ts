import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsPageRoutingModule } from './user-details-page-routing.module';
import { UserDetailsPageComponent } from './user-details-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';


@NgModule({
  declarations: [
    UserDetailsPageComponent,
    UserDetailsCardComponent
  ],
  imports: [
    CommonModule,
    UserDetailsPageRoutingModule,
    SharedModule
  ]
})
export class UserDetailsPageModule { }
