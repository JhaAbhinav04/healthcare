import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAppointmentsComponent } from './place-appointments.component';

describe('PlaceAppointmentsComponent', () => {
  let component: PlaceAppointmentsComponent;
  let fixture: ComponentFixture<PlaceAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
