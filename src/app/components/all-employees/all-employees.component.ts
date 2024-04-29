import { Component, Input} from '@angular/core';
import { EmployeesService } from '../../services/employees.service'
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent {
  @Input() employee: any = [];
  employees: any = [];

  constructor(private empService: EmployeesService) {}

  ngOnInit(): void
  {
    this.empService.getEmployees().subscribe((emps) => this.employees = emps);
  }

  deleteEmployee(employee: any)
  {
    this.empService.deleteEmployee(employee).subscribe(() => (this.employees = this.employees.filter((t: any) => t.id !== employee.id)));
  }


}
