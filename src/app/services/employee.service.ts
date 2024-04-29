import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employeeData } from '../interfaces/employeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private Url = 'http://localhost:3000/employeeData';

  constructor(private http : HttpClient) { }

  getEmployees(): Observable<employeeData[]>
  {
    return this.http.get<employeeData[]>(this.Url);
  }

}
