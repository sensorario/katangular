import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { MessengerService } from '../messenger.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  customFormName;

  constructor(
  private builder: FormBuilder,
  private messenger: MessengerService,
  ) {
    this.clearForm();
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this.messenger.send(data)
    this.clearForm();
  }

  private clearForm() {
    this.customFormName = this.builder.group({
      username: '',
    });
  }
}
