import { Component, OnInit } from '@angular/core';
import NavItem from '../nav-item';

@Component({
  selector: 'nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})

export class NavContainerComponent implements OnInit {

  private navItems: NavItem[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Category",
      link: "/category",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Home",
      link: "/",
    },
  ];
  constructor() {}

  ngOnInit() {
  }

}
