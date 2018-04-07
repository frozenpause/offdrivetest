import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { post } from 'selenium-webdriver/http';

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
  setting: string;
  showSettings: boolean;
  Post: string[];
  posts = this.Post;
  username = 'Username';
  password = 'Password';

  addSett(setting){
    this.settings.push(setting);
  }

  constructor(private PostsService: PostsService) {
    this.title = 'Drive',
    this.desc = 'Office drive description',
    this.sidebar = {
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile'
    }
    this.settings = ['edit','delete','rename'];
    this.showSettings = false;

    this.PostsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  toggleSettings() {
    if (this.showSettings == true) {
      this.showSettings = false;
    } else {
      this.showSettings = true;
    }
  }
  ngOnInit() {
    interface Post {
      id: number;
      title: string;
      body: string;
    }
  }

}
