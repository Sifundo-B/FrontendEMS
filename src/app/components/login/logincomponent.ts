import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class loginComponent 
{

  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private router: Router, private userService: EmployeesService){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.required]
    })

  }
 login()
 {
     this.http.get<any>('http://localhost:3000/employeeData')
     .subscribe(response=>{
     const theUser = response.find((details:any)=>
     {
      return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
    });
    if(theUser){
        this.userService.setCurrentUser(theUser);
        this.loginForm.reset()
        this.router.navigate(["/emp-dashboard"])
      }else{
        alert("User not found")
      }
      },err=>{
       alert("Something went wrong");
    })
 }
}