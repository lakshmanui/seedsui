import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestAPIInvocationService } from '../service/rest-api-invocation.service';
import { LoginResponse } from '../model/login-response.model';
import { LoginRequest } from '../model/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest : LoginRequest;
  loginResponse : LoginResponse;
  
  constructor(private restApiInvocationService : RestAPIInvocationService, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    emailId: ['', Validators.required],
    password: [''],
    });
  
  
    onSubmit(data : FormGroup){
      this.loginRequest= new LoginRequest();
      this.loginRequest.emailUserId=data.value.emailId;
      this.loginRequest.password=data.value.password;

      this.restApiInvocationService.postRequest(false, "/user/login",this.loginRequest)
      .subscribe( response => {this.loginResponse=response.data,console.log(this.loginResponse)});

    }
}
