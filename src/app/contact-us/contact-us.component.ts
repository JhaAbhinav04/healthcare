import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  formData: any = {};

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Send form data to backend or handle submission logic here
      // For demo purposes, just show success message
      this.successMessage = 'Form submitted successfully!';
      // Reset form
      this.contactForm.reset();
    } else {
      // Form is invalid, show error message
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }
}
