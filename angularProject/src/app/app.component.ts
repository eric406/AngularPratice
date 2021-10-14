import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello world how are you';
  jsonValue = {
    a: "Hello",
    b: "World"
  };

  constructor(private httpservice: HttpService) {

  }


  newDate = new Date();

  handleEvent() {
    this.httpservice.getRequest('https://jsonplaceholder.typicode.com/todos/1');
  }
}




