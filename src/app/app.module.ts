import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaySlipComponent } from './pages/pay-slip/pay-slip.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { loginComponent } from './components/login/logincomponent';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    PaySlipComponent
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
