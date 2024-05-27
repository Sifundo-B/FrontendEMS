import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedEmployeesComponent } from './deleted-employees.component';

describe('DeletedEmployeesComponent', () => {
  let component: DeletedEmployeesComponent;
  let fixture: ComponentFixture<DeletedEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedEmployeesComponent]
    });
    fixture = TestBed.createComponent(DeletedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
