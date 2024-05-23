import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser,Department,Position } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // constructor(private http: HttpClient) {}

  // NewEmployee(employees: {
  //   name: any;
  //   surname: any;
  //   gender: any;
  //   phone: any;
  //   email: any;
  //   address: any;
  //   idNo: any;
  //   employeeId: any;
  //   password: any;
  //   department: any;
  //   workRole: any;
  //   emergencyContactName: any;
  //   emergencyContactRelationship: any;
  //   emergencyContactNo: any;
  // }) {
  //   console.log(employees);
  //   this.http.post('http://localhost:3000/employeeData',employees).subscribe((res) => {
  //       console.log(res);
  //     });
  // }
  newEmployee: EMPUser = new EMPUser();
  departments: Department[] = [];
  positions: Position[] = [];
  errorMessage: string = '';

  constructor(private empservice: EmployeesService) { }

  ngOnInit(): void {
    this.empservice.getDepartments().subscribe((data) => {
      this.departments = data;
    }, (error) => {
      this.errorMessage = error;
    });

    this.empservice.getPositions().subscribe((data) => {
      this.positions = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  addEmployee(): void {
    this.empservice.createEmployee(this.newEmployee).subscribe((data) => {
      console.log('Employee created:', data);
    }, (error) => {
      this.errorMessage = error;
    });
  }

  updateEmployee(id: number): void {
    this.empservice.updateEmployee(id, this.newEmployee).subscribe((data) => {
      console.log('Employee updated:', data);
    }, (error) => {
      this.errorMessage = error;
    });
  }

  deleteEmployee(id: number): void {
    this.empservice.deleteEmployee(id).subscribe(() => {
      console.log('Employee deleted');
    }, (error) => {
      this.errorMessage = error;
    });
  }

  }
