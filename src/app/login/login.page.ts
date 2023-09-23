import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = ''; //  Se Agrega la propiedad 'email' y se le da un valor inicial al campo
  password: string = ''; 

  constructor() { }

  ngOnInit() {
  }

}
