import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title_login: string;
  label_username: string;
  label_password: string;
  btn_login: string;

  constructor() {
    this.title_login = 'Login';
    this.label_username = 'Username';
    this.label_password = 'Password';
    this.btn_login = 'Login';
  }

  ngOnInit() {
  }

}
