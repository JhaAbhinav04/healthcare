import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: UserService) {}

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }
}
