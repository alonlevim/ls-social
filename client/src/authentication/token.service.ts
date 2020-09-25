import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = "token";

  constructor() { }

  existsToken() {
    return localStorage.getItem(this.tokenKey) != null;
  }

  getToken() {
    return 'bearer ' + localStorage.getItem(this.tokenKey);
  }

  setToken(token) {
    return localStorage.setItem(this.tokenKey, token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}