import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { LoginService } from 'src/app/service/login.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: EmployeesService,
    private loginService: LoginService,
    private authService: AuthService // Inject AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.loginService.login(credentials).subscribe(
      response => {
        this.userService.setCurrentUser(response.user, response.token); // Store the user and token
        this.authService.setLoggedIn(true); // Update the login state
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
        console.error('Login error:', error);
      }
    );
  }
}
