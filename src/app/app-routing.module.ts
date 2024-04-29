import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';

const routes: Routes = [
  {path: 'side-bar', component: SideBarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: LoginComponent},
  {path: 'paySlip', component: PaySlipComponent}
  //{path: '', component: LoginComponent}
  //For when typing a wrong path{path: '**', redirectTo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
