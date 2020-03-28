import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginForm } from './login-form';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private subject: Subject<LoginForm> = new Subject;

  constructor() { }

  send(form: LoginForm) {
    this.subject.next(form);
  }

  getSubject() : Subject<LoginForm> {
    return this.subject;
  }
}
