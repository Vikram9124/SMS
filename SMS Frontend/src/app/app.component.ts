import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          this.preventBackNavigation(event);
        }
      }
    });
  }

  private preventBackNavigation(event: NavigationStart): void {
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event) {
      history.pushState(null, document.title, location.href);
    });
  }
}
