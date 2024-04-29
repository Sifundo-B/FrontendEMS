import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl: string = 'http://localhost:4000/employeeData';

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  deleteEmployee(employee: any): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${employee.id}`)
  }
  
}