import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  title_testing: string;
  sidebar: object;
  settings: string[];
  sett: string;
  showSettings: boolean = false;
  posts: Post[];
  username = 'Username';
  password = 'Password';

  constructor(private dataService: DataService) {
    this.title_testing = 'Testing Page';
    this.sidebar = {
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile'
    }
    this.settings = ['edit','delete','rename'];
  }

  submit(sett){
    console.log('submit works');
    this.settings.unshift(sett);
    return false;
  }
  delete(setting){
    for(let i = 0; i < this.settings.length; i++){
      if(this.settings[i] == setting){
        this.settings.splice(i, 1);
      }
    }
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
    // if (this.showSettings == true) {
    //   this.showSettings = false;
    // } else {
    //   this.showSettings = true;
    // }
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}