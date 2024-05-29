import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser, Department, Position } from 'src/app/models/EMPUser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent implements OnInit {

  employeeForm: FormGroup;
  departments: Department[] = [];
  positions: Position[] = [];
  currentEmployee: EMPUser | undefined;
  employeeId: number | undefined;
  errorMessage: string = '';
  updateSuccess: boolean = false; // Add this flag

  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
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
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['id'];
      if (this.employeeId) {
        this.loadEmployeeData(this.employeeId);
      }
    });

    this.loadDepartments();
    this.loadPositions();
  }

  loadEmployeeData(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(employee => {
      this.currentEmployee = employee;
      this.populateForm();
    }, error => {
      console.error('Error fetching employee data', error);
    });
  }

  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  loadPositions(): void {
    this.employeeService.getPositions().subscribe((positions) => {
      this.positions = positions;
    });
  }

  populateForm(): void {
    if (this.currentEmployee) {
      this.employeeForm.patchValue({
        ...this.currentEmployee,
        departmentId: this.currentEmployee.department?.departmentId,
        positionId: this.currentEmployee.position?.positionId,
        startDate: this.currentEmployee.startDate ? new Date(this.currentEmployee.startDate).toISOString().substring(0, 10) : '',
        dateOfBirth: this.currentEmployee.dateOfBirth ? new Date(this.currentEmployee.dateOfBirth).toISOString().substring(0, 10) : ''
      });
    }
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

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const formData = this.employeeForm.value;

    formData.department = { departmentId: formData.departmentId };
    formData.position = { positionId: formData.positionId };

    if (formData.startDate) {
      formData.startDate = new Date(formData.startDate);
    }
    if (formData.dateOfBirth) {
      formData.dateOfBirth = new Date(formData.dateOfBirth);
    }

    if (this.currentEmployee) {
      this.employeeService.updateEmployee(this.currentEmployee.id, formData).subscribe(
        updated => {
          this.updateSuccess = true; // Set the flag to true
          this.snackBar.open('Employee successfully updated!', 'Close', {
            duration: 3000
          });
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 3000);
        },
        error => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }
}
