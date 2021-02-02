import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  activeTab: string = 'home';

  constructor(
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('bg-metlife');
      }
      return;
    }

    var element = document.getElementById('navbar-top');
    if (element) {
      element.classList.remove('bg-metlife');
    }
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    var element = document.getElementById('collapse-navigation');
    if (!element) {
      return;
    }

    if (!element.classList.contains('show')) {
      return;
    }
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.onWindowScroll(event);
  }
}
