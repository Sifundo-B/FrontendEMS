import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable,catchError } from 'rxjs';
import { GetEmployeeDataService } from 'src/app/services/get-employee-data.service';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.scss']
})
export class UpDateComponent {
  
constructor(private empServ: GetEmployeeDataService){}
     

   save():void{
    this.empServ.upDate(this.empServ.getEmployees).subscribe()
   }
       
      






}
