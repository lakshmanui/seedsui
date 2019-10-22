import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteComponent } from './register.component';

describe('RegisteComponent', () => {
  let component: RegisteComponent;
  let fixture: ComponentFixture<RegisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
