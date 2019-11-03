import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegistrationRequest } from '../model/registration-request.model.';
import {RestAPIInvocationService} from '../service/rest-api-invocation.service'
import { RegistrationResponse } from '../model/registration-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  requestData : RegistrationRequest;
  registrationResponse : RegistrationResponse;
  constructor(private restApiInvocationService : RestAPIInvocationService, private fb: FormBuilder) { }

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
  
    onSubmit(data : FormGroup){

      this.requestData = new RegistrationRequest();
      this.requestData.firstName= data.value.firstName;
      this.requestData.lastName=data.value.lastName;
      this.requestData.email=data.value.email;
      this.requestData.password=data.value.password;
      this.requestData.confirmedPassword=data.value.confirmPassword;
      this.requestData.address=data.value.street;
      this.requestData.state=data.value.state;
      this.requestData.city=data.value.city;
      this.requestData.contactNumber=data.value.contactNumber;
      this.requestData.zip=data.value.zip;
      this.requestData.creditCardNumber=data.value.creditCardNumber;
      this.requestData.expiryDate=data.value.expiryDate;
      this.requestData.contactNumber=data.value.contactNumber;
      this.requestData.cvv=data.value.cvv;
      this.requestData.trialUser=data.value.trialUser;

      this.restApiInvocationService.postRequest(false, "/user/register",this.requestData)
      .subscribe( response => this.registrationResponse=response.data);
      
    }
  
}
