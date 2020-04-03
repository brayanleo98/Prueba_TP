import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoComponentComponent } from './empleado-component.component';

describe('EmpleadoComponentComponent', () => {
  let component: EmpleadoComponentComponent;
  let fixture: ComponentFixture<EmpleadoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
