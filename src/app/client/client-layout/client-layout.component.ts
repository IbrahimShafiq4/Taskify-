import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  template: `
    <app-header />
    <router-outlet></router-outlet>
    <app-side-bar />
  `,
})
export class ClientLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
