import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

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
      firstname: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      streetaddress: ['', Validators.required],
      addressline2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      trainerpreference: ['', Validators.required],
      physiotherapist: ['', Validators.required],
      package: ['', Validators.required],
      weeks: [{ value: 2, disabled: true }],
      amount: [{ value: this.amount, disabled: true }],
    });

    this.fitnessForm.get('package')?.valueChanges.subscribe((value) => {
      if (value === '4Ses' || value === '5Ses') {
        this.showWeeks = true;
        this.fitnessForm.get('weeks')?.enable();
        this.amount = value === '5Ses' ? 3000 : 3200;
        if (this.fitnessForm.get('physiotherapist')?.value === 'y') {
          this.amount += 200;
        }
        this.fitnessForm.get('amount')?.setValue(this.amount);
      } else {
        this.showWeeks = false;
        this.fitnessForm.get('weeks')?.disable();
        this.amount = 500;
        this.fitnessForm.get('amount')?.setValue(this.amount);
      }
    });
  }

  onSubmit() {
    if (this.fitnessForm.valid) {
      const formData = this.fitnessForm.value;
      formData.amount = this.amount;
      console.log('Form data:', formData);
      this.http
        .post<any>('http://localhost:8000/appointments', formData)
        .subscribe(
          (response) => {
            console.log('Successfully submitted:', response);
          },
          (error) => {
            console.error('Error submitting:', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
