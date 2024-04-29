import { Component } from '@angular/core';
import { GetEmployeeDataService } from 'src/app/services/get-employee-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 //This declare an array that will be used to display data from out json file
  empData : any[] = [];

  constructor(private  empService : GetEmployeeDataService){}

  ngOnInit(): void{
    this.gettingEmp();
  }

   //The function that gets the data from our service
   gettingEmp(){
    

    this.empService.getEmployees().subscribe(
      (response)=>{
       this.empData = response;
       //console.log(this.empData);
      },
      (error)=>{
       console.error('Error loading employee details:', error);
      }
   )





    // this.empService.getEmployees().subscribe(
    //    (response)=>{
    //     this.empData = response;
    //     //console.log(this.empData);
    //    },
    //    (error)=>{
    //     console.error('Error loading employee details:', error);
    //    }
    // )

   }

    

}
