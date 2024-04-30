import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  constructor(private userService: EmployeesService ){}

  ngOnInit(){
    console.log(this.userService.getCurrentUser());
  }
}
