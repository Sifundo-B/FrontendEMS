import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { EMPUser } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {
  @Input() employee: EMPUser[] = [];
  employees: EMPUser[] = [];

  constructor(private empService: EmployeesService) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      emps => this.employees = emps,
      error => console.error('Error fetching employees', error)
    );
  }

  deleteEmployee(employee: EMPUser): void {
    this.empService.deleteEmployee(employee.id).subscribe(
      () => this.employees = this.employees.filter(emp => emp.id !== employee.id),
      error => console.error('Error deleting employee', error)
    );
  }
}
