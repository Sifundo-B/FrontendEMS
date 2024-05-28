import { Component, Input } from '@angular/core';
import { DepartmetService } from 'src/app/department.service';
import { Department } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  @Input() department: Department[] = [];
  departments: Department[] = [];

  constructor(private departService: DepartmetService) {}

  ngOnInit(): void {
    this.departService.getDepartments().subscribe(
      departs => this.departments = departs,
      error => console.error('Error fetching departments', error)
    );
  }

  deleteDepartment(department: Department): void {
    this.departService.deleteDepartment(department.id).subscribe(
      () => this.departments = this.departments.filter(depart => depart.id !== department.id),
      error => console.error('Error deleting department', error)
    );
  }

}
