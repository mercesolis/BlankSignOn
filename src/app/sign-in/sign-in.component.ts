import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSubmit: FormGroup;

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid && this.formSubmit.controls.inputPassword.touched;
  }

  constructor(private formBuilder: FormBuilder) {

    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);

  }

}
