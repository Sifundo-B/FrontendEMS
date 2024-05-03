import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockSideComponent } from './mock-side.component';

describe('MockSideComponent', () => {
  let component: MockSideComponent;
  let fixture: ComponentFixture<MockSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockSideComponent]
    });
    fixture = TestBed.createComponent(MockSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
