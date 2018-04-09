import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title_about: string;

  constructor() {
    this.title_about = 'About';
  }

  ngOnInit() {
  }

}
