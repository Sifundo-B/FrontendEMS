import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { EMPUser, Department, Position } from 'src/app/models/EMPUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  currentUser: any;
  departments: Department[] = [];
  positions: Position[] = [];

  constructor(
    private fb: FormBuilder,
    private empService: EmployeesService
  ) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      gender: [''],
      dateOfBirth: [''],
      startDate: [''],
      image: [''],
      department: [''],
      position: ['']
    });
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.empService.getEmployeeById(this.currentUser.id).subscribe(
      user => {
        this.profileForm.patchValue({
          ...user,
          department: user.department?.departmentId,
          position: user.position?.positionId
        });
      },
      error => {
        console.error('Error loading profile', error);
      }
    );

    this.empService.getDepartments().subscribe(departments => this.departments = departments);
    this.empService.getPositions().subscribe(positions => this.positions = positions);
  }

  updateProfile(): void {
    const formValue = this.profileForm.value;
    const updatedProfile: EMPUser = {
      ...formValue,
      department: this.departments.find(dep => dep.departmentId === formValue.department),
      position: this.positions.find(pos => pos.positionId === formValue.position)
    };

    this.empService.updateEmployee(this.currentUser.id, updatedProfile).subscribe(
      data => {
        console.log('Profile updated:', data);
      },
      error => {
        console.error('Error updating profile', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileForm.patchValue({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
}
