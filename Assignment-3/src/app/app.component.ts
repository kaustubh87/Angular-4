import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showContent = 'Secret Password = tuna';
  // tslint:disable-next-line:no-inferrable-types
  count: number = 0;
  log = [];

  showHide: boolean;

  showDetails() {
  this.showHide = !this.showHide;
  this.count++;
  this.log.push(this.log.length+1);

  }

}
