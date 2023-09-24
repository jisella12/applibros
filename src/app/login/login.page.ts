import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}
}
