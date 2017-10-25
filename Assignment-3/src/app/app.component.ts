import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showContent = 'Secret Password = tuna';
  count = 0;
  countClicks = ['0'];

  showHide: boolean;

  showDetails() {
  this.showHide = !this.showHide;
  this.count++;

  }

}
