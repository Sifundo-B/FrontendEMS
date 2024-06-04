import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EMPUser, Department, Position } from './models/EMPUser';

@Injectable({
  providedIn: 'root'
})
export class DepartmetService {
  private baseUrl = 'http://localhost:8080/api';
  private currentDepart: any;
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
  getCurrentDepartment() {
    this.currentDepart = JSON.parse(localStorage.getItem('currentDepartment'));
    return this.currentDepart;
  }

 
  getDeletedDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments/deleted`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  

  recoverDepartment(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/departments/recover/${id}`, {}, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.baseUrl}/departments/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.baseUrl}/departments`, department, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }


  updateDepartment(id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.baseUrl}/departments/${id}`, department, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/departments/${id}`, { headers: this.getHeaders() }).pipe(
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
