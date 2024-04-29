import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';


const routes: Routes = [
  { path: '' , component: LandingPageComponent},
  // { path: 'login', component: NavbarComponent }
  { path: 'dashboard' , component: AdminDashboardComponent},
  { path: 'registration' , component: LandingPageComponent},
  {path: 'side-bar', component: SideBarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: LoginComponent},
  {path: 'paySlip', component: PaySlipComponent},
  {path:'', component: EmployeeDashboardComponent},
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports : [RouterModule]
})
export class AppRoutingModule { }
