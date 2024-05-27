import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { EMPUser } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-deleted-employees',
  templateUrl: './deleted-employees.component.html',
  styleUrls: ['./deleted-employees.component.scss']
})
export class DeletedEmployeesComponent implements OnInit {
  deletedEmployees: EMPUser[] = [];

  constructor(private empService: EmployeesService) {}

  ngOnInit(): void {
    this.loadDeletedEmployees();
  }

  loadDeletedEmployees(): void {
    this.empService.getDeletedEmployees().subscribe(
      employees => this.deletedEmployees = employees,
      error => console.error('Error fetching deleted employees', error)
    );
  }

  recoverEmployee(employee: EMPUser): void {
    this.empService.recoverEmployee(employee.id).subscribe(
      () => this.deletedEmployees = this.deletedEmployees.filter(emp => emp.id !== employee.id),
      error => console.error('Error recovering employee', error)
    );
  }
}
