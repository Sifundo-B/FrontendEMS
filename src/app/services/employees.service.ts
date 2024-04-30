import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl: string = 'http://localhost:3000/employeeData';
  private user: any;

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  deleteEmployee(employee: any): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${employee.id}`)
  }

  setCurrentuser(user: any){
    this.user = user;
  }

  getCurrentUser(){
    return this.user;
  }
  
}