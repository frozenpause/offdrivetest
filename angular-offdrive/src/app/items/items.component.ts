import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title: string;
  desc: string;
  sidebar: object;
  settings: string[];
  showSettings: boolean;

  constructor() {
    this.title = 'Drive',
    this.desc = 'Office drive description',
    this.sidebar = {
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile'
    }
    this.settings = ['edit','delete','rename'];
    this.showSettings = false;
  }
  toggleSettings() {
    if (this.showSettings == true) {
      this.showSettings = false;
    } else {
      this.showSettings = true;
    }
  }

  ngOnInit() {
  }

}
