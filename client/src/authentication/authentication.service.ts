import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private server: ConfigService) { }

  logout() {
    this.server.postLogout().subscribe({
      next: _ => window.location.reload(),
    });
  }
}
