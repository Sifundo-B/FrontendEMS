import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EMPUser,Department,Position } from '../models/EMPUser';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseUrl = 'http://localhost:8090/api';
  private currentUser: any;

  constructor(private http: HttpClient) { }  
  

  setCurrentUser(user: any){
    localStorage.clear();
    localStorage.setItem('currentUser', JSON.stringify(user));
    // this.currentUser = user;
  }

  getCurrentUser(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }

  getEmployees(): Observable<EMPUser[]> {
    return this.http.get<EMPUser[]>(`${this.baseUrl}/employees`).pipe(
      catchError(this.handleError)
    );
  }
  getEmployeeById(id: number): Observable<EMPUser> {
    return this.http.get<EMPUser>(`${this.baseUrl}/employees/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  
  createEmployee(employee: EMPUser): Observable<EMPUser> {
    return this.http.post<EMPUser>(`${this.baseUrl}/employees`, employee).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(id: number, employee: EMPUser): Observable<EMPUser> {
    return this.http.put<EMPUser>(`${this.baseUrl}/employees/${id}`, employee).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employees/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`).pipe(
      catchError(this.handleError)
    );
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}/positions`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  
  
}