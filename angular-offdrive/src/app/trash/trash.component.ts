import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  title_trash: string;

  constructor() {
    this.title_trash = 'Trash';
  }

  ngOnInit() {
  }

}
