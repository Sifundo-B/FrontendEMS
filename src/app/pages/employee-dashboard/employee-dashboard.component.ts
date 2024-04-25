import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {

  data: any[] = [];

  constructor(private http:HttpClient , private employee : EmployeeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
