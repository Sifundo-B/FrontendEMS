import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor(private http: HttpClient) { 

this.http.get('http://localhost:3000/employeeData').subscribe();
  
    }
  
  
}
