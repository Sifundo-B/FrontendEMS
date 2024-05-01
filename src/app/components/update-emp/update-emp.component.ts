import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { employeeData } from 'src/app/interfaces/employeeData';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent {

  data: employeeData[] = []
  constructor(private http: HttpClient, private employee: EmployeesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employee.getEmployees().subscribe((emp) => {this.data = emp});
    
  
  }
}
