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
  messageError: string;
  loading: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.errorRequest = false;
    this.loading = true;

    if (this.typeMethod === "sign-up") {
      this.auth.registration(user,
        () => {
          // Error while sent request
          this.loading = false;
          this.errorRequest = true;
          this.messageError = "Can't sign up right now, try in few minutes again.";
        });
    }
    else if (this.typeMethod === "sign-in") {
      this.auth.login(user, () => {
          // Error while sent request
          this.loading = false;
          this.errorRequest = true;
          this.messageError = "Your account or password is incorrect.";
      });
    }
  }

  changeTypeMethod() {
    this.typeMethod = this.typeMethod === 'sign-up' ? 'sign-in' : 'sign-up';
  }
}


