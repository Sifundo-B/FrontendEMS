import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-deleted-employees',
  templateUrl: './deleted-employees.component.html',
  styleUrls: ['./deleted-employees.component.scss']
})
export class DeletedEmployeesComponent implements OnInit {
  deletedEmployees: EMPUser[] = [];
  errorMessage: string = '';

  constructor(private empService: EmployeesService) {}

  ngOnInit(): void {
    this.empService.getDeletedEmployees().subscribe(
      (data) => {
        this.deletedEmployees = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  recoverEmployee(employee: EMPUser): void {
    this.empService.recoverEmployee(employee.id).subscribe(
      () => {
        this.deletedEmployees = this.deletedEmployees.filter(emp => emp.id !== employee.id);
        alert('Employee recovered successfully');
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
