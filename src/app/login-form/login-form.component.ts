import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  customFormName;

  constructor(private builder: FormBuilder) {
    this.clearForm();
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data)
    this.clearForm();
  }

  private clearForm() {
    this.customFormName = this.builder.group({
      username: '',
    });
  }
}
