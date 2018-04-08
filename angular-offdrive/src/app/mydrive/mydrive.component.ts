import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydrive',
  templateUrl: './mydrive.component.html',
  styleUrls: ['./mydrive.component.css']
})
export class MydriveComponent implements OnInit {
  title: string;
  desc: string;
  constructor() {
    this.title = 'Drive',
    this.desc = 'Office drive description'
   }

  ngOnInit() {
  }

}
