import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './components/login/logincomponent';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { TaxCertComponent } from './components/tax-cert/tax-cert.component';
import { DeletedEmployeesComponent } from './components/deleted-employees/deleted-employees.component';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { PositionComponent } from './components/position/position.component';
import { PositionsListComponent } from './components/positions-list/positions-list.component';



const routes: Routes = [
  { path: '' , component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent  },
  { path: 'dashboard' , component: AdminDashboardComponent},
  {path: 'side-bar', component: SideBarComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'pay-slip', component: PaySlipComponent},
  {path:'emp-dashboard', component: EmployeeDashboardComponent},
  {path: 'update-emp', component: UpdateEmpComponent},
  {path: 'tax-cert', component: TaxCertComponent},
  {path: 'recover',component:DeletedEmployeesComponent},
  {path: 'departmentList',component:DepartmentListComponent},
 {path: 'department', component:DepartmentComponent},
 {path: 'department', component:DepartmentComponent},
   {path: 'positions', component:PositionComponent},
   {path: 'positions-list', component:PositionsListComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
