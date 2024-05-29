import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { EMPUser } from 'src/app/models/EMPUser';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';
@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {
  @Input() employee: EMPUser[] = [];
  employees: EMPUser[] = [];

  constructor(private empService: EmployeesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      emps => this.employees = emps,
      error => console.error('Error fetching employees', error)
    );
  }

  confirmDelete(employee: EMPUser): void {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);
    dialogRef.componentInstance.message = `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEmployee(employee);
      }
    });
  }

  deleteEmployee(employee: EMPUser): void {
    this.empService.deleteEmployee(employee.id).subscribe(
      () => this.employees = this.employees.filter(emp => emp.id !== employee.id),
      error => console.error('Error deleting employee', error)
    );
  }
}
