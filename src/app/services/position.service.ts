import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department, Position } from '../models/EMPUser';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api';
  private currentPosition: any;
  private currentUser: any;


  

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }
  getCurrentPosition() {
    this.currentPosition = JSON.parse(localStorage.getItem('currentPosition'));
    return this.currentPosition;
  }

 
  getDeletedPosition(id: number): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}/positions/${id}`, { headers: this.getHeaders() }).pipe(
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
  

  recoverPosition(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/positions/recover/${id}`, {}, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.baseUrl}/positions`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getPositionById(id: number): Observable<Position> {
    return this.http.get<Position>(`${this.baseUrl}/positions/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  createPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(`${this.baseUrl}/positions/create`, position, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }


  updatePosition(id: number, position: Position): Observable<Position> {
    return this.http.put<Position>(`${this.baseUrl}/positions/${id}`, position, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  deletePosition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/positions/${id}`, { headers: this.getHeaders() }).pipe(
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
