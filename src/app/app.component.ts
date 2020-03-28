import { Component } from '@angular/core';
import { MessengerService } from './messenger.service';
import { LoginForm } from './login-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'katangular';

  constructor(private messenger : MessengerService) {
    let subject = this.messenger.getSubject();
    subject.subscribe((form:LoginForm) => {
      console.log(form.username)
    })
  }
}
