import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EMPUser, Department, Position } from '../models/EMPUser';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseUrl = 'http://localhost:8080/api';
  private currentUser: any;

  constructor(private http: HttpClient) { }

  setCurrentUser(user: any, token: string) {
    localStorage.clear();
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  getDeletedEmployees(): Observable<EMPUser[]> {
    return this.http.get<EMPUser[]>(`${this.baseUrl}/employees/deleted`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  recoverEmployee(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/employees/recover/${id}`, {}, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
  getEmployees(): Observable<EMPUser[]> {
    return this.http.get<EMPUser[]>(`${this.baseUrl}/employees`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // getEmployeeById(id: number): Observable<EMPUser> {
  //   return this.http.get<EMPUser>(`${this.baseUrl}/employees/${id}`, { headers: this.getHeaders() }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  createEmployee(employee: EMPUser): Observable<EMPUser> {
    return this.http.post<EMPUser>(`${this.baseUrl}/employees`, employee, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(id: number, employee: EMPUser): Observable<EMPUser> {
    return this.http.put<EMPUser>(`${this.baseUrl}/employees/${id}`, employee, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<EMPUser> {
    return this.http.post<EMPUser>(`${this.baseUrl}/auth/login`, { email, password }).pipe(
      catchError(this.handleError)
    );
  }
  
  getEmployeeById(id: number): Observable<EMPUser> {
    return this.http.get<EMPUser>(`${this.baseUrl}/employees/profile/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
  
  // updateEmployee(id: number, employee: EMPUser): Observable<EMPUser> {
  //   return this.http.put<EMPUser>(`${this.baseUrl}/employees/profile/${id}`, employee, { headers: this.getHeaders() }).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  



  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employees/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}/positions`, { headers: this.getHeaders() }).pipe(
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
