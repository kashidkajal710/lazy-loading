import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { KycDetailsComponent } from './kyc-details/kyc-details.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path:'kyc-details',component:KycDetailsComponent},
{path:'registration-details',component:RegistrationDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
