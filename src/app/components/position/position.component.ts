import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/EMPUser';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent {
  @Input() position: Position[] = [];
  positions: Position[] = [];
  positionForm: FormGroup;
  errorMessage: string = '';

  constructor(private positionService: PositionService,
    private fb: FormBuilder,
    private router: Router //w Inject Router here
  ) {
    this.positionForm = this.fb.group({
      departmentName: ['', Validators.required]
      
    });
  }
  ngOnInit(): void {
    this.positionService.getPositions().subscribe(
      position => this.positions = position,
      error => console.error('Error fetching positions', error)
    );  
  }
  

  addPosition(): void {
    const formValue = this.positionForm.value;
  //   const newDepartment: Department = {
  //     ...formValue,
  //     department: this.departments.find(dep => dep.departmentId === formValue.department)
  //   };

  //   this.departService.createDepartment(newDepartment).subscribe((data) => {
  //     console.log('Employee created:', data);
  //     alert('Department successfully Added!');
  //     this.router.navigate(['/dashboard']); // Navigate to the dashboard after success
  //   }, (error) => {
  //     this.errorMessage = error;
  //   });
  // }
  this.positionService.createPosition(formValue).subscribe(data=>{
    console.log('Position created:', data);
    alert('Position successfully added');
    this.positionForm.reset();
    this.router.navigate(['/dashboard']);
  })
}

}
