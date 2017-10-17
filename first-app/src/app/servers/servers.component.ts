import { Component, OnInit } from '@angular/core';

@Component({

  /* Select by elements */

  selector: 'app-servers',

 /* Select by attributes
 selector: '[app-servers]', */

 /* Select by class
 selector : '.app-servers', */

  /*templateUrl: './servers.component.html',*/
  template: `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
