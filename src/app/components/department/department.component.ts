import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DepartmetService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  @Input() department: Department[] = [];
  departments: Department[] = [];
  departmentForm: FormGroup;
  errorMessage: string = '';

  constructor(private departService: DepartmetService,
    private fb: FormBuilder,
    private router: Router //w Inject Router here
  ) {
    this.departmentForm = this.fb.group({
      departmentName: ['', Validators.required]
      
    });
  }
  ngOnInit(): void {
    this.departService.getDepartments().subscribe(
      departs => this.departments = departs,
      error => console.error('Error fetching departments', error)
    );  
  }
  

  addDepartment(): void {
    const formValue = this.departmentForm.value;
  //   const newDepartment: Department = {
  //     ...formValue,
  //     department: this.departments.find(dep => dep.departmentId === formValue.department)
  //   };

  //   this.departService.createDepartment(newDepartment).subscribe((data) => {
  //     console.log('Employee created:', data);
  //     alert('Department successfully Added!');
  //     this.router.navigate(['/dashboard']); // Navigate to the dashboard after success
  //   }, (error) => {
  //     this.errorMessage = error;
  //   });
  // }
  this.departService.createDepartment(formValue).subscribe(data=>{
    console.log('Department created:', data);
    alert('Department successfully added');
    this.departmentForm.reset();
    this.router.navigate(['/dashboard']);
  })
}
}
