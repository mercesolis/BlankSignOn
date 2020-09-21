import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formSubmit: FormGroup;

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid && this.formSubmit.controls.inputPassword.touched;
  }

  get confirmPasswordInvalid(): boolean {
    return !this.formSubmit.controls.confirmPassword.valid && this.formSubmit.controls.confirmPassword.touched;
  }

  get passwordError(): boolean {
    return this.formSubmit.hasError('passwordError');
  }

  constructor(private formBuilder: FormBuilder) {

    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    },
    {validators: this.passwordValidator});
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);

  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get('inputPassword');
    const confirm = control.get('confirmPassword');

    if(confirm.value !=='' && password.value !== confirm.value) {
      return {passwordError: true};
    }

    return null;
  }


}
