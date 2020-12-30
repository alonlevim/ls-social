import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user';
import { NewToken } from './newToken';
import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private server: ConfigService) { }

  login(user: User, catchError: Function) {
    this.server.postLogin(user).subscribe({
      next: data => this.loginSucceeded(data),
      error: error => catchError()
    });
  }

  registration(user: User, catchError: Function) {
    this.server.postRegistration(user).subscribe({
      next: data => this.loginSucceeded(data),
      error: error => catchError()
    });
  }

  private loginSucceeded(data: NewToken) {
    if (data.status === "ok") {
      // Set token in local-storage
      // this.token.setToken(data.token);
      // refresh page
      document.location.replace("/");
      // window.location.reload();
    }
  }
}
