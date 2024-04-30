import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { employeeData } from 'src/app/interfaces/employeeData';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {

  data: any[] = [this.userService.getCurrentUser()];

  constructor(private http : HttpClient , private employee : EmployeeService, private userService: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }
  
  getEmployeeData()
  {
    this.employee.getEmployees().subscribe(
      (response)=>{
        this.data = response;
        console.log(this.data);
      },
      (error)=>
      {
        console.error('Error loading employeee details: ', error);
      }
    )
      
    
  }


}
