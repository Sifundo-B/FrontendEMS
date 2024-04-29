import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginComponent } from './logincomponent';

describe('Login1Component', () => {
  let component: loginComponent;
  let fixture: ComponentFixture<loginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loginComponent]
    });
    fixture = TestBed.createComponent(loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
