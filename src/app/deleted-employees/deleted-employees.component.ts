import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { EMPUser } from 'src/app/models/EMPUser';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../components/confirmdialog/confirmdialog.component';
@Component({
  selector: 'app-deleted-employees',
  templateUrl: './deleted-employees.component.html',
  styleUrls: ['./deleted-employees.component.scss']
})
export class DeletedEmployeesComponent implements OnInit {
  deletedEmployees: EMPUser[] = [];

  constructor(private empService: EmployeesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDeletedEmployees();
  }

  loadDeletedEmployees(): void {
    this.empService.getDeletedEmployees().subscribe(
      employees => this.deletedEmployees = employees,
      error => console.error('Error fetching deleted employees', error)
    );
  }

  confirmRecover(employee: EMPUser): void {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);
    dialogRef.componentInstance.message = `Are you sure you want to recover ${employee.firstName} ${employee.lastName}?`;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recoverEmployee(employee);
      }
    });
  }

  recoverEmployee(employee: EMPUser): void {
    this.empService.recoverEmployee(employee.id).subscribe(
      () => this.deletedEmployees = this.deletedEmployees.filter(emp => emp.id !== employee.id),
      error => console.error('Error recovering employee', error)
    );
  }
}
