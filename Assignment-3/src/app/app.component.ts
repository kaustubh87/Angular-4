import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showContent = true;
  count = 0;

  showDetails() {
    this.count++;
    this.showContent = false;
  }

}
