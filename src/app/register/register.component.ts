import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email:[''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    password: [''],
    contactNumber: [''],
    confirmPassword: [''],
    creditCardNumber: [''],
    expiryDate:[''],
    cvv:[''],
    trialUser:['']
    });
  
  
}
