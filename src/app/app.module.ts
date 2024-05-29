import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/logincomponent';
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
import { RouterModule } from '@angular/router';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    ConfirmdialogComponent,
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
