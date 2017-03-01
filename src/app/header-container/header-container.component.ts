import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {
  public searchText: string;

  constructor() {
    this.searchText = "";
  }

  ngOnInit() {
  }

}
