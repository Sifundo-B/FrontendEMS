import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
empData: any[] = [];

constructor (private empService : LoginService){}
 
ngOnint(): void{
  this.getData()
}

getData(){

 this.empService.getEmployees().subscribe((response)=>{
  this.empData = response;
  console.log(this.getData)
 },
 (error)=>{
  console.log("Error landing employee")
 }
 )
 }
}
