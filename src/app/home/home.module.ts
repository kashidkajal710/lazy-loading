import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { KycDetailsComponent } from './kyc-details/kyc-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationDetailsComponent,
    KycDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
