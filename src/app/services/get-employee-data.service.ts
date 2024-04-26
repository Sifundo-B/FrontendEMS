import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetEmployeeDataService {

  //API goes here, but for now we using json file 
  private url = 'http://localhost:3000/employeeData';

  constructor(private http: HttpClient) {}
  //Function for getting employees

  getEmployees(): Observable<any>{
    return this.http.get<any>(this.url)
    //console.log(this.url);
  }
  
  
}
