import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser, Department, Position } from 'src/app/models/EMPUser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../components/confirmdialog/confirmdialog.component';

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
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      idNumber: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
      password: ['', [Validators.required, Validators.minLength(8), this.validatePassword]],
      dateOfBirth: ['', [Validators.required, this.validateAge.bind(this)]],
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
    }, (error) => {
      this.errorMessage = error;
    });

    this.empservice.getPositions().subscribe((data) => {
      this.positions = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  validateAge(control: AbstractControl): ValidationErrors | null {
    const dob = new Date(control.value);
    const age = this.calculateAge(dob);
    return age < 18 ? { 'ageInvalid': true } : null;
  }

  calculateAge(dob: Date): number {
    const diffMs = Date.now() - dob.getTime();
    const ageDate = new Date(diffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  validatePassword(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;

    return !isValid ? { 'passwordInvalid': true } : null;
  }

  addEmployee(): void {
    if (this.employeeForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }
  
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '250px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const formValue = this.employeeForm.value;
        const newEmployee: EMPUser = {
          ...formValue,
          department: this.departments.find(dep => dep.departmentId === formValue.departmentId),
          position: this.positions.find(pos => pos.positionId === formValue.positionId)
        };
  
        this.empservice.createEmployee(newEmployee).subscribe((data) => {
          this.snackBar.open('Employee successfully added!', 'Close', {
            duration: 3000
          });
          this.router.navigate(['/dashboard']); // Navigate to the dashboard after success
        }, (error) => {
          this.errorMessage = error;
        });
      }
    });
  }
  
}
