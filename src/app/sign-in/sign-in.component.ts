import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSubmit: FormGroup;

  validLogin = true;

  
  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid && this.formSubmit.controls.inputPassword.touched;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);
    this.validLogin = this.authService.login(this.formSubmit.controls.inputEmail.value, this.formSubmit.controls.inputPassword.value);

    if (this.validLogin) {
      this.router.navigate(['/userprofile']);
    }
  }

  

}
