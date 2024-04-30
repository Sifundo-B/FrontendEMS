import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { loginComponent } from './components/login/logincomponent';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '' , component: LandingPageComponent},
  { path: 'login', component: loginComponent },
  { path: 'registration', component: RegistrationComponent  },
  { path: 'dashboard' , component: AdminDashboardComponent},
  {path: 'side-bar', component: SideBarComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'paySlip', component: PaySlipComponent},
  {path:'emp-dashboard', component: EmployeeDashboardComponent},
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports : [RouterModule]
})
export class AppRoutingModule { }
