import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  title_recent: string;

  constructor() {
    this.title_recent = 'Recent';
  }

  ngOnInit() {
  }

}
