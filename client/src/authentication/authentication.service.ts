import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user';
import { NewToken } from './newToken';
import { ConfigService } from './../config/config.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private token: TokenService, private router: Router, private server: ConfigService) { }

  checkAuth(path: string) {
    const loginPath = "/login";
    const rootPath = "/";

    if (path !== loginPath && !this.token.existsToken()) {
      // There is no token redirect to login page
      this.router.navigate([loginPath]);
    }
    else if (this.token.existsToken() && path === loginPath) {
      // In Login page and have token, will redirect to root page
      this.router.navigate([rootPath]);
    }
  }

  login(user: User) {
    
  }

  registration(user: User, catchError: Function) {
    return this.server.postRegistration(user).subscribe({
      next: data => this.registrationSucceeded(data),
      error: error => catchError()
    });
  }

  logout() {
    this.token.removeToken();
    window.location.reload();
  }

  private registrationSucceeded(data: NewToken) {
    if (data.status === "ok") {
      // Set token in local-storage
      this.token.setToken(data.token);
      // refresh page
      window.location.reload();
    }
  }
}
