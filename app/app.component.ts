import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users$;

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
