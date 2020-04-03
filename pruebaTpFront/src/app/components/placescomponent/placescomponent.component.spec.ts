import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacescomponentComponent } from './placescomponent.component';

describe('PlacescomponentComponent', () => {
  let component: PlacescomponentComponent;
  let fixture: ComponentFixture<PlacescomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacescomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
