import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydrive',
  templateUrl: './mydrive.component.html',
  styleUrls: ['./mydrive.component.css']
})
export class MydriveComponent implements OnInit {
  title_mydrive: string;
  desc_mydrive: string;
  constructor() {
    this.title_mydrive = 'Drive',
    this.desc_mydrive = 'Office drive description'
   }

  ngOnInit() {
  }

}
