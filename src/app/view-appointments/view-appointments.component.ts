import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.http.get<any[]>('http://localhost:8000/appointments').subscribe(
      (data) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
