import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Url ='http://localhost:3000/employeeData';

  constructor(private http: HttpClient){}
  
  getEmployees(): Observable<any>
  {
    return this.http.get<any>(this.Url)
  }
}
