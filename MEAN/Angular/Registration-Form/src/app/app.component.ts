import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User()
  submittedUser=null

  submit(form) {
  	this.submittedUser = this.user
  	this.user = new User()
  	form.reset()
  }

}
