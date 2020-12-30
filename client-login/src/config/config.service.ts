import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../authentication/user';
import { NewToken } from './../authentication/newToken';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = environment.production ? '/' : "http://localhost:8081/";

  constructor(private http: HttpClient) {

  }

  // Login / Registration
  postLogin(user: User) {
    const loginApi = 'login';

    return this.http.post<NewToken>(this.configUrl + loginApi, { ...user });
  }

  postRegistration(user: User) {
    const addUserApi = 'add-user';

    return this.http.post<NewToken>(this.configUrl + addUserApi, { ...user });
  }
}
