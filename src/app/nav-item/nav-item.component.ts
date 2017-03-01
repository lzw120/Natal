import { Component, OnInit, Input } from '@angular/core';
import NavItem from '../nav-item';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input('navItem') navItem: NavItem;
  constructor() { }

  ngOnInit() {
  }

}
