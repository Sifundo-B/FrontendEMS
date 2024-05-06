import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private http: HttpClient) {}

  NewEmployee(employees: {
    name: any;
    surname: any;
    gender: any;
    phone: any;
    email: any;
    address: any;
    idNo: any;
    employeeId: any;
    password: any;
    department: any;
    workRole: any;
    emergencyContactName: any;
    emergencyContactRelationship: any;
    emergencyContactNo: any;
  }) {
    console.log(employees);
    this.http.post('http://localhost:3000/employeeData',employees).subscribe((res) => {
        console.log(res);
      });
  }


  }
