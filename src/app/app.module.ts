import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginComponent } from './components/login/logincomponent';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    DashboardComponent,
    EmployeeDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
