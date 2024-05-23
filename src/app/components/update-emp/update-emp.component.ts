import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { employeeData } from 'src/app/interfaces/employeeData';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent {
  data: employeeData[] = []
  formData: any;
  currentEmployee: any;
  employeeId: any;
  employeeForm: FormGroup;


  constructor(private http: HttpClient, private employee: EmployeesService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employee.getEmployees().subscribe((emp) => {
      // this.data = emp
      this.setCurrentUser()
      console.log(this.data)
      console.log(this.currentEmployee)
    });
    this.route.queryParams.subscribe(params => this.employeeId = params['id'])
    console.log(this.data);

    this.initForm();

    console.log(this.currentEmployee)
  }

  setCurrentUser(){
    this.data.map(x => {
      if (x.id == this.employeeId) {
        this.currentEmployee = x;
      }
    })
  }

  getCurrentUser(){
    return this.currentEmployee;
  }

  initForm() {
    this.employeeForm = this.fb.group({
      name: [''],
      surname: [''],
      gender: [''],
      phone: [''],
      email: [''],
      address: [''],
      id: [''],
      employeeId: [''],
      password: [''],
      department: [''],
      workRole: [''],
      emergencyContactName: [''],
      emergencyContactRelationship: [''],
      emergencyContactNo: ['']
    });
  }

  onSubmit(){
    const formData = this.employeeForm.value;
    this.employee.updateEmployee(this.currentEmployee.id, formData).subscribe(updated => {
      console.log(updated);
      alert('Employee successfully updated!');
    })
  }
}
