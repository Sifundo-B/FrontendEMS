import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsListComponent } from './positions-list.component';

describe('PositionsListComponent', () => {
  let component: PositionsListComponent;
  let fixture: ComponentFixture<PositionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionsListComponent]
    });
    fixture = TestBed.createComponent(PositionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
