import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  data: any[] = [this.userService.getCurrentUser()];

  constructor (private http : HttpClient, private userService: EmployeesService) {}

  
    //navTitle: string = 'Employee Management';
    //userName: string = 'admin: David Brown';
    //userImg: string = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388';    

    
}
