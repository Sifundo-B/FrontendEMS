import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      idNo: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      employeeId: ['', Validators.required],
      password: ['', Validators.required],
      department: [''],
      workRole: [''],
      emergencyContactName: [''],
      emergencyContactRelationship: [''],
      emergencyContactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const employees = this.registrationForm.value;
      console.log(employees);
      this.http.post('http://localhost:3000/employeeData', employees).subscribe((res) => {
        console.log(res);
      });
    } else {
      // Handle form validation errors
      console.log('Form is invalid. Please check all fields.');
    }
  }
}
