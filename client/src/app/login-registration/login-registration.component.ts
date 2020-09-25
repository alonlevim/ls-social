import { User } from './../../authentication/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {
  model = new User();
  typeMethod = 'sign-up';
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: User) {
    if( this.typeMethod === "sign-up" ) {

    }
    else if (this.typeMethod === "sign-in") {

    }
  }

}
