import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/logincomponent';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
//import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { NavigationComponent} from './components/navigation/navigation.component';

import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { TaxCertComponent } from './components/tax-cert/tax-cert.component';
import { MockSideComponent } from './components/mock-side/mock-side.component';
import { DeletedEmployeesComponent } from './deleted-employees/deleted-employees.component';
import { DepartmentComponent } from './components/department/department.component';
import { PositionComponent } from './components/position/position.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { PositionsListComponent } from './components/positions-list/positions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    PaySlipComponent,
    RegistrationComponent,
    EmployeeDashboardComponent,
    NavbarComponent,
    AdminDashboardComponent,
    AllEmployeesComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    LandingPageComponent,
    UpdateEmpComponent,
    TaxCertComponent,
    MockSideComponent,
    DeletedEmployeesComponent,
    DepartmentComponent,
    PositionComponent,
    DepartmentListComponent,
    PositionsListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
