import { Component, OnInit } from '@angular/core';

@Component({

  /* Select by elements */

  selector: 'app-servers',

 /* Select by attributes
 selector: '[app-servers]', */

 /* Select by class
 selector : '.app-servers', */

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },5000);
  }

  ngOnInit() {
  }

}
