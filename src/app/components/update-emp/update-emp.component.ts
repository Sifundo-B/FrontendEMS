import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EMPUser, Department, Position } from 'src/app/models/EMPUser';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent implements OnInit {
  
  data: EMPUser[] = [];
  currentEmployee: EMPUser = {} as EMPUser;
  employeeId: number | undefined;
  employeeForm: FormGroup;
  departments: Department[] = [];
  positions: Position[] = [];

  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['id'];
      this.loadEmployeeData();
    });

    this.loadDepartments();
    this.loadPositions();

    this.initForm();
  }

  loadEmployeeData(): void {
    this.employeeService.getEmployees().subscribe((emp) => {
      this.data = emp;
      this.setCurrentUser();
      this.populateForm();
    });
  }

  setCurrentUser(): void {
    if (this.employeeId) {
      this.currentEmployee = this.data.find(x => x.id == this.employeeId) || {} as EMPUser;
    }
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

  initForm(): void {
    this.employeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      phoneNumber: [''],
      email: [''],
      address: [''],
      idNumber: [''],
      password: [''],
      startDate: [''],
      dateOfBirth: [''],
      departmentId: [''],
      positionId: [''],
      emergencyContactName: [''],
      emergencyContactRelationship: [''],
      emergencyContactNo: ['']
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

  onSubmit(): void {
    const formData = this.employeeForm.value;

    // Ensure the department and position are properly assigned
    formData.department = { departmentId: formData.departmentId };
    formData.position = { positionId: formData.positionId };

    // Parse date fields to ensure correct format
    if (formData.startDate) {
      formData.startDate = new Date(formData.startDate);
    }
    if (formData.dateOfBirth) {
      formData.dateOfBirth = new Date(formData.dateOfBirth);
    }

    console.log('Submitting form data:', formData);
  
    this.employeeService.updateEmployee(this.currentEmployee.id, formData).subscribe(
      updated => {
        console.log(updated);
        alert('Employee successfully updated!');
      },
      error => {
        console.error('Error updating employee:', error);
      }
    );
  }  
}
