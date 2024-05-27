import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/api/v1/auth/authenticate';
  private employeesUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {}

  // login(credentials: { email: string, password: string }): Observable<any> {
  //   return this.http.post<any>(this.loginUrl, credentials).pipe(
  //     tap(response => {
  //       if (response && response.token) {
  //         localStorage.setItem('token', response.token);
  //       }
  //     })
  //   );
  // }
  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.employeesUrl, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
