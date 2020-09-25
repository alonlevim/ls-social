import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private token: TokenService, private router: Router) { }

  checkAuth(path: string) {
    const loginPath = "/login";

    if (path != loginPath && !this.token.existsToken()) {
      // There is no token redirect to login page
      this.router.navigate([loginPath]);
    }
  }
}
