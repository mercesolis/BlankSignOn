import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  formSubmit: FormGroup;
  inputFirstName: FormControl = new FormControl('', Validators.required);

  get inputFirstNameInvalid(): boolean {
    return !this.inputFirstName.valid && this.inputFirstName.touched;
  }

  constructor(private formBuilder: FormBuilder){
    this.formSubmit = this.formBuilder.group({inputFirstName: this.inputFirstName
    });
  }
  

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);


  }
}
