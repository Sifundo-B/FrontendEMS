import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser, Department, Position } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
 
  employeeForm: FormGroup;
  departments: Department[] = [];
  positions: Position[] = [];
  errorMessage: string = '';

  constructor(
    private empservice: EmployeesService,
    private fb: FormBuilder,
    private router: Router // Inject Router here
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      idNumber: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      startDate: ['', Validators.required],
      departmentId: ['', Validators.required],
      positionId: ['', Validators.required],
      emergencyContactName: [''],
      emergencyContactRelationship: [''],
      emergencyContactNo: ['']
    });
  }

  ngOnInit(): void {
    this.empservice.getDepartments().subscribe((data) => {
      this.departments = data;
      console.log("get departments: ", this.departments);
    }, (error) => {
      this.errorMessage = error;
    });

    this.empservice.getPositions().subscribe((data) => {
      this.positions = data;
      console.log("get positions: ", this.positions);
    }, (error) => {
      this.errorMessage = error;
    });
  }

  addEmployee(): void {
    const formValue = this.employeeForm.value;
    const newEmployee: EMPUser = {
      ...formValue,
      department: this.departments.find(dep => dep.departmentId === formValue.departmentId),
      position: this.positions.find(pos => pos.positionId === formValue.positionId)
    };

    this.empservice.createEmployee(newEmployee).subscribe((data) => {
      console.log('Employee created:', data);
      alert('Employee successfully Added!');
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.errorMessage = error;
    });
  }
}
