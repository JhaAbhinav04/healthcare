import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  createAppointment(appointment: any) {
    let appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }

  getAppointments() {
    return JSON.parse(localStorage.getItem('appointments') || '[]');
  }
}
