import { Component, Input, OnInit } from '@angular/core';
import { DepartmetService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/EMPUser';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  @Input() department: Department[] = [];
  departments: Department[] = [];
  constructor(private departService: DepartmetService) {}
  ngOnInit(): void {
    this.departService.getDepartments().subscribe(
      deps => this.departments = deps,
      error => console.error('Error fetching departments', error)
    );
  }

  deleteDepartment(department: Department): void {
    this.departService.deleteDepartment(department.id).subscribe(
      () => this.departments = this.departments.filter(emp => emp.id !== department.id),
      error => console.error('Error deleting department', error)
    );
  }

}
