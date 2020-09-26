import { User } from './../../authentication/user';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent implements OnInit {
  model = new User();
  typeMethod = 'sign-up';
  errorRequest = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.errorRequest = false;
    
    if (this.typeMethod === "sign-up") {
      this.auth.registration(user,
        () => {
          // Error while sent request
          this.errorRequest = true;
        });
    }
    else if (this.typeMethod === "sign-in") {
      this.auth.login(user);
    }
  }

  changeTypeMethod() {
    this.typeMethod = this.typeMethod === 'sign-up' ? 'sign-in' : 'sign-up';
  }
}


