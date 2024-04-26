import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //This declares the as part of formGroup and making sure that the for form is initialised b4 used  
  
  public loginForm !:FormGroup

  constructor(private formbuilder:FormBuilder, private http: HttpClient, private router:Router){}

  ngOnInit(): void{
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }

  login()
    {
      this.http.get<any>("http://localhost:3000/employeeData").subscribe(response=>{
        const theUser = response.find((details:any)=>
        {
          return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
        });
        console.log(this.loginForm);
        
        if(theUser)
        {
          this.loginForm.reset();
          this.router.navigate(["/dashboard"])
        // }else if(theUser === ){

         }
        else
        {
          alert("User not found")
        }
      },err=>
      {
        alert("Something went wrong");
      })
    }}

