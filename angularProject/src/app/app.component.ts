import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do data binding';
  jsonValue = {
    a:"Hello",
    b:"World"
  };

  newDate = new Date();

  handleEvent(){
    console.log('Button Clicked', this.title)
  }



}
