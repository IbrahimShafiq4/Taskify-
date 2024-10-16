import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  template: ` <router-outlet></router-outlet> `,
})
export class ClientLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
