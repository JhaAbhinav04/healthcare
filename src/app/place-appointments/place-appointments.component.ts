import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public age: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public weeks?: number,
    public amount?: number
  ) {}
}

@Component({
  selector: 'app-place-appointments',
  templateUrl: './place-appointments.component.html',
  styleUrls: ['./place-appointments.component.css'],
})
export class PlaceAppointmentsComponent implements OnInit {
  fitnessForm!: FormGroup;
  showWeeks: boolean = false;
  amount: number = 0;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.fitnessForm = this.formBuilder.group({
      inr: [null],
      paisa: [null],
      streetaddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      pincode: [null, Validators.required],
      phonenumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      age: [null, Validators.required],
      trainerpreference: [null, Validators.required],
      physiotherapist: [null, Validators.required],
      packages: [null, Validators.required],
      weeks: [{ value: 2, disabled: true }], // Default value for weeks, disabled
    });
  }

  onSubmit() {
    if (this.fitnessForm.valid) {
      const formData = this.fitnessForm.value;
      const fitnessData = new Fitness(
        formData.inr,
        formData.paisa,
        formData.streetaddress,
        formData.city,
        formData.state,
        formData.country,
        formData.pincode,
        formData.phonenumber,
        formData.email,
        formData.firstname,
        formData.lastname,
        formData.age,
        formData.trainerpreference,
        formData.physiotherapist,
        formData.packages,
        formData.weeks
      );

      // Send the form data to the backend server
      this.http
        .post<any>('http://localhost:8000/appointments', fitnessData)
        .subscribe(
          (response) => {
            console.log('Data sent successfully:', response);
            // Handle success, e.g., display a success message
          },
          (error) => {
            console.error('Error occurred while sending data:', error);
            // Handle error, e.g., display an error message
          }
        );
    } else {
      // Handle invalid form submission, e.g., display validation errors
      // console.error('Invalid form submission:', this.fitnessForm.errors);
    }
  }
}
